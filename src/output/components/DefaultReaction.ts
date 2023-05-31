export const DefaultReaction = {
    "type": "object",
    "properties": {
        "emoji_id": {
            "type": "string",
            "description": "the id of a guild's custom emoji"
        },
        "emoji_name": {
            "type": "string",
            "description": "the unicode character of the emoji"
        }
    },
    "required": [
        "emoji_id",
        "emoji_name"
    ]
}