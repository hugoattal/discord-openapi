export const Button = {
    "type": "object",
    "properties": {
        "type": {
            "type": "integer",
            "description": "`2` for a button"
        },
        "style": {
            "type": "integer",
            "description": "A [button style](#DOCS_INTERACTIONS_MESSAGE_COMPONENTS/button-object-button-styles)"
        },
        "label": {
            "type": "string",
            "description": "Text that appears on the button; max 80 characters"
        },
        "emoji": {
            "$ref": "#/components/schemas/Emoji",
            "description": "`name`, `id`, and `animated`"
        },
        "custom_id": {
            "type": "string",
            "description": "Developer-defined identifier for the button; max 100 characters"
        },
        "url": {
            "type": "string",
            "description": "URL for link-style buttons"
        },
        "disabled": {
            "type": "boolean",
            "description": "Whether the button is disabled (defaults to `false`)"
        }
    },
    "required": [
        "type",
        "style"
    ]
};
