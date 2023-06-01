export const RequestGuildMembers = {
    "type": "object",
    "properties": {
        "guild_id": {
            "type": "string",
            "description": "ID of the guild to get members for"
        },
        "query": {
            "type": "string",
            "description": "string that username starts with, or an empty string to return all members"
        },
        "limit": {
            "type": "integer",
            "description": "maximum number of members to send matching the `query`; a limit of `0` can be used with an empty string `query` to return all members"
        },
        "presences": {
            "type": "boolean",
            "description": "used to specify if we want the presences of the matched members"
        },
        "user_ids": {
            "type": "array",
            "description": "used to specify which users you wish to fetch",
            "items": {
                "type": "string"
            }
        },
        "nonce": {
            "type": "string",
            "description": "nonce to identify the [Guild Members Chunk](#DOCS_TOPICS_GATEWAY_EVENTS/guild-members-chunk) response"
        }
    },
    "required": [
        "guild_id",
        "limit"
    ]
};
