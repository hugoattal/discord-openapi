import _ from "lodash";

export function markdownToJSONObject(markdown: string): object {
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
            if (value.startsWith("?")) {
                obj[key] = value.substring(1);
            }
            else {
                obj[key] = value;
            }
        }

        if (obj.field.includes("deprecated")) {
            return;
        }

        const isOptional = obj.field.endsWith("?");
        obj.field = obj.field.replace("?", "");
        obj.field = obj.field.replaceAll("\\*", "");

        if (!isOptional) {
            required.push(obj.field);
        }

        if (obj.type === "snowflake") {
            obj.type = "string";
            //obj.format = "snowflake";
        }

        if (obj.type === "ISO8601 timestamp") {
            obj.type = "string";
            obj.format = "date-time";
        }

        if (obj.type.match(/#DOCS_/)) {
            const match = obj.type.match(/#DOCS_[\w_]+\/([\w-]+)/);
            if (match[1].endsWith("-object")) {
                obj.$ref = _.startCase(match[1].slice(0, -"-object".length)).replaceAll(" ", "");
                delete obj.type;
            }
            else {
                obj.type = "unknown";
            }
        }

        if (obj.type?.startsWith("array of ")) {
            obj.items = {
                type: obj.type.slice("array of ".length, -1)
            };
            obj.type = "array";

            if (obj.items.type === "snowflake") {
                obj.items.type = "string";
                //obj.items.format = "snowflake";
            }
        }

        if (obj.type?.startsWith("list of snowflakes")) {
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

        properties[obj.field] = _.pickBy({
            type: obj.type,
            $ref: obj.$ref,
            description: obj.description,
            format: obj.format,
            items: obj.items
        }, _.identity);
    });

    return {
        type: "object",
        properties,
        required
    };
}
