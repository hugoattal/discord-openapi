export const Sticker = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "[id of the sticker](#DOCS_REFERENCE/image-formatting)"
        },
        "pack_id": {
            "type": "string",
            "description": "for standard stickers, id of the pack the sticker is from"
        },
        "name": {
            "type": "string",
            "description": "name of the sticker"
        },
        "description": {
            "type": "string",
            "description": "description of the sticker"
        },
        "tags\\*": {
            "type": "string",
            "description": "autocomplete/suggestion tags for the sticker (max 200 characters)"
        },
        "asset": {
            "type": "string",
            "description": "**Deprecated** previously the sticker asset hash, now an empty string"
        },
        "type": {
            "type": "integer",
            "description": "[type of sticker](#DOCS_RESOURCES_STICKER/sticker-object-sticker-types)"
        },
        "format_type": {
            "type": "integer",
            "description": "[type of sticker format](#DOCS_RESOURCES_STICKER/sticker-object-sticker-format-types)"
        },
        "available": {
            "type": "boolean",
            "description": "whether this guild sticker can be used, may be false due to loss of Server Boosts"
        },
        "guild_id": {
            "type": "string",
            "description": "id of the guild that owns this sticker"
        },
        "user": {
            "$ref": "User",
            "description": "the user that uploaded the guild sticker"
        },
        "sort_value": {
            "type": "integer",
            "description": "the standard sticker's sort order within its pack"
        }
    },
    "required": [
        "id",
        "name",
        "description",
        "tags\\*",
        "type",
        "format_type"
    ]
}