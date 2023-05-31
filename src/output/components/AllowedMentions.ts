export const AllowedMentions = {
    "type": "object",
    "properties": {
        "parse": {
            "type": "array of allowed mention types",
            "description": "An array of [allowed mention types](#DOCS_RESOURCES_CHANNEL/allowed-mentions-object-allowed-mention-types) to parse from the content."
        },
        "roles": {
            "type": "list of snowflakes",
            "description": "Array of role_ids to mention (Max size of 100)"
        },
        "users": {
            "type": "list of snowflakes",
            "description": "Array of user_ids to mention (Max size of 100)"
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