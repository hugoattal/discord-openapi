export const Emoji = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "[emoji id](#DOCS_REFERENCE/image-formatting)"
        },
        "name": {
            "type": "string (can be null only in reaction emoji objects)",
            "description": "emoji name"
        },
        "roles": {
            "$ref": "Roleobject",
            "description": "roles allowed to use this emoji"
        },
        "user": {
            "$ref": "Userobject",
            "description": "user that created this emoji"
        },
        "require_colons": {
            "type": "boolean",
            "description": "whether this emoji must be wrapped in colons"
        },
        "managed": {
            "type": "boolean",
            "description": "whether this emoji is managed"
        },
        "animated": {
            "type": "boolean",
            "description": "whether this emoji is animated"
        },
        "available": {
            "type": "boolean",
            "description": "whether this emoji can be used, may be false due to loss of Server Boosts"
        }
    },
    "required": [
        "id",
        "name"
    ]
}