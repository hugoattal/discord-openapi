export const ApplicationCommandOption = {
    "type": "object",
    "properties": {
        "type": {
            "type": "object",
            "description": "Type of option"
        },
        "name": {
            "type": "string",
            "description": "[1-32 character name](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/application-command-object-application-command-naming)"
        },
        "name_localizations": {
            "type": "object",
            "description": "Localization dictionary for the `name` field. Values follow the same restrictions as `name`"
        },
        "description": {
            "type": "string",
            "description": "1-100 character description"
        },
        "description_localizations": {
            "type": "object",
            "description": "Localization dictionary for the `description` field. Values follow the same restrictions as `description`"
        },
        "required": {
            "type": "boolean",
            "description": "If the parameter is required or optional--default `false`"
        },
        "choices": {
            "type": "array",
            "description": "Choices for `STRING`, `INTEGER`, and `NUMBER` types for the user to pick from, max 25",
            "items": {
                "type": "object"
            }
        },
        "options": {
            "type": "array",
            "description": "If the option is a subcommand or subcommand group type, these nested options will be the parameters",
            "items": {
                "type": "object"
            }
        },
        "channel_types": {
            "type": "array",
            "description": "If the option is a channel type, the channels shown will be restricted to these types",
            "items": {
                "type": "object"
            }
        },
        "min_value": {
            "type": "integer",
            "description": "If the option is an `INTEGER` or `NUMBER` type, the minimum value permitted"
        },
        "max_value": {
            "type": "integer",
            "description": "If the option is an `INTEGER` or `NUMBER` type, the maximum value permitted"
        },
        "min_length": {
            "type": "integer",
            "description": "For option type `STRING`, the minimum allowed length (minimum of `0`, maximum of `6000`)"
        },
        "max_length": {
            "type": "integer",
            "description": "For option type `STRING`, the maximum allowed length (minimum of `1`, maximum of `6000`)"
        },
        "autocomplete": {
            "type": "boolean",
            "description": "If autocomplete interactions are enabled for this `STRING`, `INTEGER`, or `NUMBER` type option"
        }
    },
    "required": [
        "type",
        "name",
        "description",
        "autocomplete"
    ]
};
