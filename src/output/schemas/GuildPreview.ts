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
            "type": "array",
            "description": "custom guild emojis",
            "items": {
                "$ref": "#/components/schemas/Emoji"
            }
        },
        "features": {
            "type": "array",
            "description": "enabled guild features",
            "items": {
                "type": "object"
            }
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
            "type": "array",
            "description": "custom guild stickers",
            "items": {
                "$ref": "#/components/schemas/Sticker"
            }
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
