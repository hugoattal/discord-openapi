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

        if (!isOptional) {
            required.push(obj.field);
        }

        if (obj.type === "snowflake") {
            obj.type = "string";
        }

        if (obj.type === "ISO8601 timestamp") {
            obj.type = "string";
            obj.format = "date-time";
        }

        if (obj.type.match(/#DOCS_/)) {
            obj.$ref = _.capitalize(_.camelCase(obj.type.match(/#DOCS_[\w_]+\/([\w-]+)/)[1]));
            delete obj.type;
        }

        properties[obj.field] = _.pickBy({
            type: obj.type,
            $ref: obj.$ref,
            description: obj.description,
            format: obj.format
        }, _.identity);
    });

    return {
        type: "object",
        properties,
        required
    };
}
