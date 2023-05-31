export const StickerItem = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "id of the sticker"
        },
        "name": {
            "type": "string",
            "description": "name of the sticker"
        },
        "format_type": {
            "type": "integer",
            "description": "[type of sticker format](#DOCS_RESOURCES_STICKER/sticker-object-sticker-format-types)"
        }
    },
    "required": [
        "id",
        "name",
        "format_type"
    ]
}