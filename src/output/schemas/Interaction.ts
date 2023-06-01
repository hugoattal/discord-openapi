export const Interaction = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "ID of the interaction"
        },
        "application_id": {
            "type": "string",
            "description": "ID of the application this interaction is for"
        },
        "type": {
            "type": "object",
            "description": "Type of interaction"
        },
        "data": {
            "type": "object",
            "description": "Interaction data payload"
        },
        "guild_id": {
            "type": "string",
            "description": "Guild that the interaction was sent from"
        },
        "channel": {
            "$ref": "#/components/schemas/Channel",
            "description": "Channel that the interaction was sent from"
        },
        "channel_id": {
            "type": "string",
            "description": "Channel that the interaction was sent from"
        },
        "member": {
            "$ref": "#/components/schemas/GuildMember",
            "description": "Guild member data for the invoking user, including permissions"
        },
        "user": {
            "$ref": "#/components/schemas/User",
            "description": "User object for the invoking user, if invoked in a DM"
        },
        "token": {
            "type": "string",
            "description": "Continuation token for responding to the interaction"
        },
        "version": {
            "type": "integer",
            "description": "Read-only property, always `1`"
        },
        "message": {
            "$ref": "#/components/schemas/Message",
            "description": "For components, the message they were attached to"
        },
        "app_permissions": {
            "type": "string",
            "description": "Bitwise set of permissions the app or bot has within the channel the interaction was sent from"
        },
        "locale": {
            "type": "string",
            "description": "Selected [language](#DOCS_REFERENCE/locales) of the invoking user"
        },
        "guild_locale": {
            "type": "string",
            "description": "[Guild's preferred locale](#DOCS_RESOURCES_GUILD/guild-object), if invoked in a guild"
        }
    },
    "required": [
        "id",
        "application_id",
        "type",
        "token",
        "version"
    ]
};
