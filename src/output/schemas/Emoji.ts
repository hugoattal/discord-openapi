export const Emoji = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "[emoji id](#DOCS_REFERENCE/image-formatting)"
        },
        "name": {
            "type": "string",
            "description": "emoji name"
        },
        "roles": {
            "$ref": "#/components/schemas/Role",
            "description": "roles allowed to use this emoji"
        },
        "user": {
            "$ref": "#/components/schemas/User",
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
};
