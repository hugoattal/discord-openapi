export const AllowedMentions = {
    "type": "object",
    "properties": {
        "parse": {
            "type": "array",
            "description": "An array of [allowed mention types](#DOCS_RESOURCES_CHANNEL/allowed-mentions-object-allowed-mention-types) to parse from the content.",
            "items": {
                "type": "allowed mention type"
            }
        },
        "roles": {
            "type": "array",
            "description": "Array of role_ids to mention (Max size of 100)",
            "items": {
                "type": "string"
            }
        },
        "users": {
            "type": "array",
            "description": "Array of user_ids to mention (Max size of 100)",
            "items": {
                "type": "string"
            }
        },
        "replied_user": {
            "type": "boolean",
            "description": "For replies, whether to mention the author of the message being replied to (default false)"
        }
    },
    "required": [
        "parse",
        "roles",
        "users",
        "replied_user"
    ]
}