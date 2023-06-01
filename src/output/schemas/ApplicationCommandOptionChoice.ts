export const ApplicationCommandOptionChoice = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "1-100 character choice name"
        },
        "name_localizations": {
            "type": "object",
            "description": "Localization dictionary for the `name` field. Values follow the same restrictions as `name`"
        },
        "value": {
            "type": "string",
            "description": "Value for the choice, up to 100 characters if string"
        }
    },
    "required": [
        "name",
        "value"
    ]
};
