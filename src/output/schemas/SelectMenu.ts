export const SelectMenu = {
    "type": "object",
    "properties": {
        "type": {
            "type": "integer",
            "description": "[Type](#DOCS_INTERACTIONS_MESSAGE_COMPONENTS/component-object-component-types) of select menu component (text: `3`, user: `5`, role: `6`, mentionable: `7`, channels: `8`)"
        },
        "custom_id": {
            "type": "string",
            "description": "ID for the select menu; max 100 characters"
        },
        "options": {
            "type": "array",
            "description": "Specified choices in a select menu (only required and available for string selects (type `3`); max 25",
            "items": {
                "type": "object"
            }
        },
        "channel_types": {
            "type": "array",
            "description": "List of channel types to include in the channel select component (type `8`)",
            "items": {
                "type": "object"
            }
        },
        "placeholder": {
            "type": "string",
            "description": "Placeholder text if nothing is selected; max 150 characters"
        },
        "min_values": {
            "type": "integer",
            "description": "Minimum number of items that must be chosen (defaults to 1); min 0, max 25"
        },
        "max_values": {
            "type": "integer",
            "description": "Maximum number of items that can be chosen (defaults to 1); max 25"
        },
        "disabled": {
            "type": "boolean",
            "description": "Whether select menu is disabled (defaults to `false`)"
        }
    },
    "required": [
        "type",
        "custom_id"
    ]
};
