export const StickerPack = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "id of the sticker pack"
        },
        "stickers": {
            "$ref": "Sticker",
            "description": "the stickers in the pack"
        },
        "name": {
            "type": "string",
            "description": "name of the sticker pack"
        },
        "sku_id": {
            "type": "string",
            "description": "id of the pack's SKU"
        },
        "cover_sticker_id": {
            "type": "string",
            "description": "id of a sticker in the pack which is shown as the pack's icon"
        },
        "description": {
            "type": "string",
            "description": "description of the sticker pack"
        },
        "banner_asset_id": {
            "type": "string",
            "description": "id of the sticker pack's [banner image](#DOCS_REFERENCE/image-formatting)"
        }
    },
    "required": [
        "id",
        "stickers",
        "name",
        "sku_id",
        "description"
    ]
}