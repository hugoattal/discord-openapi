export const ApplicationCommandInteractionDataOption = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Name of the parameter"
        },
        "type": {
            "type": "integer",
            "description": "Value of [application command option type](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/application-command-object-application-command-option-type)"
        },
        "value": {
            "type": "string",
            "description": "Value of the option resulting from user input"
        },
        "options": {
            "type": "array",
            "description": "Present if this option is a group or subcommand",
            "items": {
                "type": "object"
            }
        },
        "focused": {
            "type": "boolean",
            "description": "`true` if this option is the currently focused option for autocomplete"
        }
    },
    "required": [
        "name",
        "type"
    ]
};
