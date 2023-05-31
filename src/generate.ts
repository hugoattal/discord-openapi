import fs from "fs";
import { markdownToSchema } from "@/lib/schemas";
import { markdownToPath } from "@/lib/paths";

export function generate() {
    const resourcesFiles = fs.readdirSync("./src/api/discord/docs/resources");
    fs.mkdirSync("./src/output/schemas", { recursive: true });
    const paths: Record<string, any> = {};

    for (const resourceFile of resourcesFiles) {
        const resourceMarkdown = fs.readFileSync(`./src/api/discord/docs/resources/${ resourceFile }`, "utf8");
        const lines = resourceMarkdown.split("\n");

        let lineIndex = 0;

        while (lineIndex < lines.length) {
            const line = lines[lineIndex].trim();

            if (line.startsWith("#") && line.endsWith("Structure")) {
                const structureName = line.match(/# ([\w ]+) Structure/)[1].replaceAll(" ", "");

                while (!lines[lineIndex].startsWith("|")) {
                    lineIndex++;
                }

                let markdown = "";

                while (lines[lineIndex].startsWith("|")) {
                    markdown += `${ lines[lineIndex] }\n`;
                    lineIndex++;
                }

                fs.writeFileSync(`./src/output/schemas/${ structureName }.ts`,
                    `export const ${ structureName } = ${ JSON.stringify(markdownToSchema(markdown), null, 4) };\n`
                );
            }

            if (line.match(/^#+ [\w ]+ %/)) {
                const match = line.match(/^#+ [\w ]+ % ([A-Z]+) (.+)/);
                const method = match[1];
                const endpoint = match[2];
                lineIndex++;

                while (lines[lineIndex].trim() === "") {
                    lineIndex++;
                }

                let description = "";
                while (lines[lineIndex] && !lines[lineIndex].startsWith("#")) {
                    description += `${ lines[lineIndex] }\n`;
                    lineIndex++;
                }

                const path = markdownToPath({ description, endpoint, method });

                if (!paths[path.endpoint]) {
                    paths[path.endpoint] = {};
                }

                paths[path.endpoint][path.method] = {
                    description: path.description,
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
                            }
                        }
                    }
                };
            }

            lineIndex++;
        }
    }

    fs.writeFileSync("./src/output/paths.ts", `export const paths = ${ JSON.stringify(paths, null, 4) };\n`);
}
