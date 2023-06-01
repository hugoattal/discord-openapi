export const ApplicationCommand = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "Unique ID of command"
        },
        "type": {
            "type": "object",
            "description": "[Type of command](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/application-command-object-application-command-types), defaults to `1`"
        },
        "application_id": {
            "type": "string",
            "description": "ID of the parent application"
        },
        "guild_id": {
            "type": "string",
            "description": "Guild ID of the command, if not global"
        },
        "name": {
            "type": "string",
            "description": "[Name of command](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/application-command-object-application-command-naming), 1-32 characters"
        },
        "name_localizations": {
            "type": "object",
            "description": "Localization dictionary for `name` field. Values follow the same restrictions as `name`"
        },
        "description": {
            "type": "string",
            "description": "Description for `CHAT_INPUT` commands, 1-100 characters. Empty string for `USER` and `MESSAGE` commands"
        },
        "description_localizations": {
            "type": "object",
            "description": "Localization dictionary for `description` field. Values follow the same restrictions as `description`"
        },
        "options": {
            "type": "array",
            "description": "Parameters for the command, max of 25",
            "items": {
                "type": "object"
            }
        },
        "default_member_permissions": {
            "type": "string",
            "description": "Set of [permissions](#DOCS_TOPICS_PERMISSIONS) represented as a bit set"
        },
        "dm_permission": {
            "type": "boolean",
            "description": "Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible."
        },
        "default_permission": {
            "type": "boolean",
            "description": "Not recommended for use as field will soon be deprecated. Indicates whether the command is enabled by default when the app is added to a guild, defaults to `true`"
        },
        "nsfw": {
            "type": "boolean",
            "description": "Indicates whether the command is [age-restricted](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/agerestricted-commands), defaults to `false`"
        },
        "version": {
            "type": "string",
            "description": "Autoincrementing version identifier updated during substantial record changes"
        }
    },
    "required": [
        "id",
        "application_id",
        "name",
        "description",
        "default_member_permissions",
        "version"
    ]
};
