export const WelcomeScreenChannel = {
    "type": "object",
    "properties": {
        "channel_id": {
            "type": "string",
            "description": "the channel's id"
        },
        "description": {
            "type": "string",
            "description": "the description shown for the channel"
        },
        "emoji_id": {
            "type": "string",
            "description": "the [emoji id](#DOCS_REFERENCE/image-formatting), if the emoji is custom"
        },
        "emoji_name": {
            "type": "string",
            "description": "the emoji name if custom, the unicode character if standard, or `null` if no emoji is set"
        }
    },
    "required": [
        "channel_id",
        "description",
        "emoji_id",
        "emoji_name"
    ]
};
