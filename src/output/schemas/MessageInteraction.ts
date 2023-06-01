export const MessageInteraction = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "ID of the interaction"
        },
        "type": {
            "type": "object",
            "description": "Type of interaction"
        },
        "name": {
            "type": "string",
            "description": "Name of the [application command](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/application-command-object-application-command-structure), including subcommands and subcommand groups"
        },
        "user": {
            "$ref": "#/components/schemas/User",
            "description": "User who invoked the interaction"
        },
        "member": {
            "$ref": "#/components/schemas/GuildMember",
            "description": "Member who invoked the interaction in the guild"
        }
    },
    "required": [
        "id",
        "type",
        "name",
        "user"
    ]
};
