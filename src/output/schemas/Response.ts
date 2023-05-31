export const Response = {
    "type": "object",
    "properties": {
        "sticker_packs": {
            "type": "array",
            "items": {
                "$ref": "#/components/schemas/StickerPack"
            }
        }
    },
    "required": [
        "sticker_packs"
    ]
};
