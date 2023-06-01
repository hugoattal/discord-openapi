export const SelectOption = {
    "type": "object",
    "properties": {
        "label": {
            "type": "string",
            "description": "User-facing name of the option; max 100 characters"
        },
        "value": {
            "type": "string",
            "description": "Dev-defined value of the option; max 100 characters"
        },
        "description": {
            "type": "string",
            "description": "Additional description of the option; max 100 characters"
        },
        "emoji": {
            "$ref": "#/components/schemas/Emoji",
            "description": "`id`, `name`, and `animated`"
        },
        "default": {
            "type": "boolean",
            "description": "Will show this option as selected by default"
        }
    },
    "required": [
        "label",
        "value"
    ]
};
