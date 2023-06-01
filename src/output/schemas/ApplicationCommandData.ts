export const ApplicationCommandData = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "the [`ID`](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/application-command-object-application-command-structure) of the invoked command"
        },
        "name": {
            "type": "string",
            "description": "the [`name`](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/application-command-object-application-command-structure) of the invoked command"
        },
        "type": {
            "type": "integer",
            "description": "the [`type`](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/application-command-object-application-command-structure) of the invoked command"
        },
        "resolved": {
            "type": "object",
            "description": "converted users + roles + channels + attachments"
        },
        "options": {
            "type": "array",
            "description": "the params + values from the user",
            "items": {
                "type": "object"
            }
        },
        "guild_id": {
            "type": "string",
            "description": "the id of the guild the command is registered to"
        },
        "target_id": {
            "type": "string",
            "description": "id of the user or message targeted by a [user](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/user-commands) or [message](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/message-commands) command"
        }
    },
    "required": [
        "id",
        "name",
        "type",
        "options"
    ]
};
