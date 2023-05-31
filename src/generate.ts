import fs from "fs";
import { markdownToJSONObject } from "@/lib/markdown";

export function generate() {
    const resourcesFiles = fs.readdirSync("./src/api/discord/docs/resources");
    fs.mkdirSync("./src/output/components", { recursive: true });

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

                fs.writeFileSync(`./src/output/components/${ structureName }.ts`,
                    `export const ${ structureName } = ${ JSON.stringify(markdownToJSONObject(markdown), null, 4) }`
                );
            }

            lineIndex++;
        }
    }
}
