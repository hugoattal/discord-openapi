import { snakeCase, startCase, camelCase } from "lodash";
import { markdownToSchema } from "@/lib/schemas";

export function markdownToPath(extract: {description: string; endpoint: string; method: string}) {
    const endpoint = extract.endpoint.replaceAll(/{([\w.]+)[.#A-Za-z_/-]*}/g, (match, p1) => `{${ snakeCase(p1) }}`);

    const path = {
        id: "",
        description: "",
        endpoint,
        method: extract.method.toLowerCase(),
        schema: {
            type: "object"
        } as unknown
    };

    path.id = camelCase(extract.method + endpoint
        .split("/")
        .filter((part) => !part.endsWith("_id}"))
        .map((part) => part.replace(/{([\w.]+)}/, (match, p1) => p1))
        .join("/"));

    if (endpoint === "/applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions" && path.method === "put") {
        path.id = "putApplicationsGuildsCommandPermissions";
    }

    if (endpoint === "/applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions" && path.method === "get") {
        path.id = "getApplicationsGuildsCommandPermissions";
    }

    if (endpoint === "/channels/{channel_id}/messages/{message_id}/reactions/{emoji}/{user_id}" && path.method === "delete") {
        path.id = "deleteChannelsMessagesReactionsUser";
    }

    path.description = extract.description.trim()
        .split("\n")
        .find((line) => line.startsWith("Returns")
            || line.startsWith("Get")
            || line.startsWith("Retrieves")
            || line.startsWith("Crosspost")
            || line.startsWith("Modify")
            || line.startsWith("Modifies")
            || line.startsWith("Post")
            || line.startsWith("Begin")
            || line.startsWith("Pin")
            || line.startsWith("Create")
            || line.startsWith("Adds")
            || line.startsWith("Updates")
            || line.startsWith("Remove")
            || line.startsWith("Edit")
            || line.startsWith("Delete"))
        ?.replaceAll(/\[([\w` ]+)]\([a-zA-Z#_/-]+\)/g, "$1");

    if (extract.description.match("# (JSON|Form|JSON/Form) Params")) {
        const lines = extract.description.trim().split("\n");
        let index = lines.findLastIndex((line) => line.match("# (JSON|Form|JSON/Form) Params"));
        let markdown = "";

        while (!lines[index].startsWith("|")) {
            index++;
        }

        while (lines[index]?.startsWith("|")) {
            markdown += `${ lines[index] }\n`;
            index++;
        }

        path.requestBody = markdownToSchema(markdown);
    }

    if (!path.description) {
        delete path.description;
    }

    if (path.id.endsWith("s") && endpoint.endsWith("}")) {
        path.id = path.id.slice(0, -1);
    }

    if (path.id === "getGateway") {
        path.schema = {
            type: "object",
            properties: {
                url: {
                    type: "string"
                }
            }
        };
        return path;
    }

    if (path.id === "getGatewayBot") {
        path.schema = {
            type: "object",
            properties: {
                session_start_limit: {
                    $ref: "#/components/schemas/SessionStartLimit"
                },
                shards: {
                    type: "number"
                },
                url: {
                    type: "string"
                }
            }
        };
        return path;
    }

    if (path.id === "postGuildsMfa") {
        path.schema = {
            type: "object",
            properties: {
                level: {
                    type: "integer"
                }
            }
        };
        return path;
    }

    const returns = extract.description.match(/Returns ([\w ]*)\[[\w ]*]\(#[A-Z_]+\/([a-z-]+)/);

    if (returns) {
        const type = returns[1];
        const schemaRaw = returns[2].endsWith("-object") ? returns[2].slice(0, -"-object".length) : returns[2];
        let schema = startCase(schemaRaw).replaceAll(" ", "");

        if (schema === "ChannelObjectChannelTypes") {
            schema = "Channel";
        }

        if (schema === "StageInstanceObjectStageInstanceStructure") {
            schema = "StageInstance";
        }

        if (schema === "ApplicationCommandPermissionsObjectGuildApplicationCommandPermissionsStructure") {
            schema = "GuildApplicationCommandPermissions";
        }

        if (type.includes("array") || type.includes("list")) {
            path.schema = {
                type: "array",
                items: {
                    $ref: `#/components/schemas/${ schema }`
                }
            };
        }
        else {
            path.schema = {
                $ref: `#/components/schemas/${ schema }`
            };
        }
    }

    return path;
}
