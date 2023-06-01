import _ from "lodash";

export function markdownToSchema(markdown: string) {
    const lines = markdown.trim().split("\n");
    const headers = lines[0].split("|").map(header => header.trim()).filter(header => header !== "");

    const properties = {};
    const required = [];

    lines.slice(2).forEach(line => {
        const values = line.split("|").map(value => value.trim()).filter(value => value !== "");
        const obj: any = {};
        for (let i = 0; i < headers.length; i++) {
            const key = headers[i].toLowerCase();

            const value = values[i];
            if (value?.startsWith("?")) {
                obj[key] = value.substring(1);
            }
            else {
                obj[key] = value;
            }
        }

        if (!obj.field) {
            return;
        }

        if (obj.field === "user_ids") {
            console.log(obj);
        }

        if (obj.field.includes("deprecated")) {
            return;
        }

        const isOptional = obj.field.endsWith("?");
        obj.field = obj.field.match(/([\w -]+)/)[1].trim();
        obj.type = obj.type.match(/([\w [\]()#/-]+)/)[1].trim();

        if (!isOptional) {
            required.push(obj.field);
        }

        if (obj.type === "snowflake") {
            obj.type = "string";
            //obj.format = "snowflake";
        }

        if (obj.type === "ISO8601 timestamp" || obj.type === "date") {
            obj.type = "string";
            obj.format = "date-time";
        }

        if (obj.type === "array") {
            const match = obj.description?.match(/#DOCS_[\w_]+\/([\w-]+)/);
            if (!match) {
                return;
            }
            const type = _.startCase(match[1].slice(0, -"-object".length)).replaceAll(" ", "");
            obj.items = {
                $ref: `#/components/schemas/${ type }`
            };
        }

        if (obj.type.match(/#DOCS_/)) {
            const match = obj.type.match(/#DOCS_[\w_]+\/([\w-]+)/);
            if (match[1].endsWith("-object")) {
                let type = _.startCase(match[1].slice(0, -"-object".length)).replaceAll(" ", "");


                ["DataModels", "Setcertifieddevices", "Setuservoicesettings", "Getvoicesettings", "Ready", "Models", "StartThreadInForumChannel"].forEach(prefix => {
                    if (type.startsWith(prefix)) {
                        type = type.slice(prefix.length);
                    }
                });

                if (type === "RpcServerConfiguration") {
                    type = "RPCServerConfiguration";
                }

                if (obj.type.startsWith("array of ")) {
                    obj.type = "array";
                    obj.items = {
                        $ref: `#/components/schemas/${ type }`
                    };
                }
                else {
                    obj.$ref = `#/components/schemas/${ type }`;
                    delete obj.type;
                }
            }
            else {
                if (obj.type.startsWith("array of ")) {
                    obj.type = "array";
                    obj.items = {
                        type: "object"
                    };
                }
                else {
                    obj.type = "object";
                }
            }
        }

        if (obj.type?.includes("array of ")) {

            obj.items = {
                type: obj.type.match(/array of ([\w ]+)/)[1].toLowerCase()
            };
            obj.type = "array";

            // Todo "snowflake or array of snowflakes"

            if (obj.items.type.endsWith("s")) {
                obj.items.type = obj.items.type.slice(0, -1);
            }

            if (obj.items.type === "snowflake") {
                obj.items.type = "string";
                //obj.items.format = "snowflake";
            }

            if (obj.items.type === "allowed mention type") {
                obj.items.type = "string";
            }

            if (obj.items.type.includes("integer")) {
                obj.items.type = "integer";
            }
        }

        if (obj.type?.startsWith("list of snowflakes") || obj.type === "dict") {
            obj.type = "array";
            obj.items = {
                type: "string"
                //format: "snowflake"
            };
        }

        if (obj.type?.includes(" or ")) {
            obj.type = obj.type.split(" or ")[0];
        }

        if (obj.type && typeof obj.type === "string") {
            //console.log(obj.type);
            obj.type = obj.type.split(" ")[0].toLowerCase();
        }

        if (obj.type === "mixed") {
            obj.type = "object";
        }

        if (["int", "single", "unsigned"].includes(obj.type)) {
            obj.type = "integer";
        }

        if (obj.type === "float") {
            obj.type = "number";
        }

        if (obj.type === "enum") {
            obj.type = "object";
        }

        if (obj.type === "null") {
            obj.type = "boolean";
        }

        if (["file", "binary"].includes(obj.type)) {
            return;
        }

        if (typeof obj.type === "string") {
            obj.type = obj.type.match(/([a-z]+)/)[1];
        }

        properties[obj.field] = _.pickBy({
            type: obj.type,
            $ref: obj.$ref,
            description: obj.description,
            format: obj.format,
            items: obj.items
        }, _.identity);
    });

    const schema = {
        type: "object",
        properties,
        required
    };

    if (required.length === 0) {
        delete schema.required;
    }

    return schema;
}
