export const EmbedField = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "name of the field"
        },
        "value": {
            "type": "string",
            "description": "value of the field"
        },
        "inline": {
            "type": "boolean",
            "description": "whether or not this field should display inline"
        }
    },
    "required": [
        "name",
        "value"
    ]
};
