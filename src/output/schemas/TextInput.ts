export const TextInput = {
    "type": "object",
    "properties": {
        "type": {
            "type": "integer",
            "description": "`4` for a text input"
        },
        "custom_id": {
            "type": "string",
            "description": "Developer-defined identifier for the input; max 100 characters"
        },
        "style": {
            "type": "integer",
            "description": "The [Text Input Style](#DOCS_INTERACTIONS_MESSAGE_COMPONENTS/text-inputs-text-input-styles)"
        },
        "label": {
            "type": "string",
            "description": "Label for this component; max 45 characters"
        },
        "min_length": {
            "type": "integer",
            "description": "Minimum input length for a text input; min 0, max 4000"
        },
        "max_length": {
            "type": "integer",
            "description": "Maximum input length for a text input; min 1, max 4000"
        },
        "required": {
            "type": "boolean",
            "description": "Whether this component is required to be filled (defaults to `true`)"
        },
        "value": {
            "type": "string",
            "description": "Pre-filled value for this component; max 4000 characters"
        },
        "placeholder": {
            "type": "string",
            "description": "Custom placeholder text if the input is empty; max 100 characters"
        }
    },
    "required": [
        "type",
        "custom_id",
        "style",
        "label"
    ]
};
