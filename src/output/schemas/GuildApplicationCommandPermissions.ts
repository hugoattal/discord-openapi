export const GuildApplicationCommandPermissions = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "ID of the command or the application ID"
        },
        "application_id": {
            "type": "string",
            "description": "ID of the application the command belongs to"
        },
        "guild_id": {
            "type": "string",
            "description": "ID of the guild"
        },
        "permissions": {
            "type": "array",
            "description": "Permissions for the command in the guild, max of 100",
            "items": {
                "type": "object"
            }
        }
    },
    "required": [
        "id",
        "application_id",
        "guild_id",
        "permissions"
    ]
};
