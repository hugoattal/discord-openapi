export const ForumTag = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "the id of the tag"
        },
        "name": {
            "type": "string",
            "description": "the name of the tag (0-20 characters)"
        },
        "moderated": {
            "type": "boolean",
            "description": "whether this tag can only be added to or removed from threads by a member with the `MANAGE_THREADS` permission"
        },
        "emoji_id": {
            "type": "string",
            "description": "the id of a guild's custom emoji \\*"
        },
        "emoji_name": {
            "type": "string",
            "description": "the unicode character of the emoji \\*"
        }
    },
    "required": [
        "id",
        "name",
        "moderated",
        "emoji_id",
        "emoji_name"
    ]
};
