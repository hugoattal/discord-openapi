import fs from "fs";
import { markdownToSchema } from "@/lib/schemas";
import { markdownToPath } from "@/lib/paths";

export function generate() {
    const resourcesFiles = fs.readdirSync("./src/api/discord/docs/resources").map((file) => `./src/api/discord/docs/resources/${ file }`);
    const topicFiles = fs.readdirSync("./src/api/discord/docs/topics").map((file) => `./src/api/discord/docs/topics/${ file }`);
    const interactionFiles = fs.readdirSync("./src/api/discord/docs/interactions").map((file) => `./src/api/discord/docs/interactions/${ file }`);
    const files = [...resourcesFiles, ...topicFiles, ...interactionFiles];

    fs.mkdirSync("./src/output/schemas", { recursive: true });
    const paths: Record<string, any> = {};
    const schemas: Record<string, any> = {};

    for (const file of files) {
        const resourceMarkdown = fs.readFileSync(file, "utf8");
        const lines = resourceMarkdown.split("\n");

        let lineIndex = 0;

        while (lineIndex < lines.length) {
            const line = lines[lineIndex].trim();

            if (line.startsWith("######") && (line.endsWith("Structure") || line.endsWith("Object") || line.endsWith("Types"))) {
                let structureName = line.match(/# ([\w ]+) (Structure|Object|Types)/)[1].replaceAll(" ", "");
                lineIndex++;

                if (structureName.endsWith("Object")) {
                    structureName = structureName.slice(0, -6);
                }

                if (schemas[structureName]) {
                    continue;
                }

                while (!lines[lineIndex].startsWith("|") && !lines[lineIndex].startsWith("#")) {
                    lineIndex++;

                    if (lines[lineIndex] === undefined) {
                        break;
                    }
                }

                if (lines[lineIndex] === undefined) {
                    continue;
                }

                let markdown = "";

                while (lines[lineIndex].startsWith("|")) {
                    markdown += `${ lines[lineIndex] }\n`;
                    lineIndex++;
                }

                schemas[structureName] = markdownToSchema(markdown);

                fs.writeFileSync(`./src/output/schemas/${ structureName }.ts`,
                    `export const ${ structureName } = ${ JSON.stringify(schemas[structureName], null, 4) };\n`
                );

                lineIndex--;
            }

            lineIndex++;
        }

        lineIndex = 0;

        while (lineIndex < lines.length) {
            const line = lines[lineIndex].trim();

            if (line.match(/^#+ [\w ]+ %/)) {
                const match = line.match(/^#+ [\w ]+ % ([A-Z]+) (.+)/);
                const method = match[1];
                const endpoint = match[2];
                lineIndex++;

                while (lines[lineIndex].trim() === "") {
                    lineIndex++;
                }

                let description = "";
                while (lines[lineIndex] && !lines[lineIndex].startsWith("## ")) {
                    description += `${ lines[lineIndex] }\n`;
                    lineIndex++;
                }
                lineIndex--;

                const path = markdownToPath({ description, endpoint, method });

                if (!paths[path.endpoint]) {
                    paths[path.endpoint] = {};
                }

                paths[path.endpoint][path.method] = {
                    operationId: path.id,
                    parameters: path.endpoint.match(/{([\w.]+)[.#A-Za-z_/-]*}/g)?.map((match) => {
                        return {
                            name: match.slice(1, -1),
                            in: "path",
                            required: true,
                            schema: {
                                type: "string"
                            }
                        };
                    }),
                    responses: {
                        200: {
                            content: {
                                "application/json": {
                                    schema: path.schema
                                }
                            },
                            description: path.description || "OK"
                        }
                    }
                };

                if (path.requestBody) {
                    paths[path.endpoint][path.method].requestBody = {
                        content: {
                            "application/json": {
                                schema: path.requestBody
                            }
                        },
                        required: true
                    };
                }
            }

            lineIndex++;
        }
    }

    fs.writeFileSync("./src/output/paths.ts", `export const paths = ${ JSON.stringify(paths, null, 4) };\n`);

    const openApi = {
        components: {
            schemas
        },
        info: {
            title: "Discord API",
            version: "10.0.0"
        },
        openapi: "3.0.0",
        paths,
        servers: [{ url: "https://discord.com/api/v10" }]
    };

    fs.writeFileSync("./src/output/openapi.json", JSON.stringify(openApi, null, 4));
}
