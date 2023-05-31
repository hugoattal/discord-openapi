export const GuildPreview = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "guild id"
        },
        "name": {
            "type": "string",
            "description": "guild name (2-100 characters)"
        },
        "icon": {
            "type": "string",
            "description": "[icon hash](#DOCS_REFERENCE/image-formatting)"
        },
        "splash": {
            "type": "string",
            "description": "[splash hash](#DOCS_REFERENCE/image-formatting)"
        },
        "discovery_splash": {
            "type": "string",
            "description": "[discovery splash hash](#DOCS_REFERENCE/image-formatting)"
        },
        "emojis": {
            "$ref": "Emoji",
            "description": "custom guild emojis"
        },
        "features": {
            "type": "unknown",
            "description": "enabled guild features"
        },
        "approximate_member_count": {
            "type": "integer",
            "description": "approximate number of members in this guild"
        },
        "approximate_presence_count": {
            "type": "integer",
            "description": "approximate number of online members in this guild"
        },
        "description": {
            "type": "string",
            "description": "the description for the guild"
        },
        "stickers": {
            "$ref": "Sticker",
            "description": "custom guild stickers"
        }
    },
    "required": [
        "id",
        "name",
        "icon",
        "splash",
        "discovery_splash",
        "emojis",
        "features",
        "approximate_member_count",
        "approximate_presence_count",
        "description",
        "stickers"
    ]
};
