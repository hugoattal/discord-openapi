export const ResolvedData = {
    "type": "object",
    "properties": {
        "users": {
            "$ref": "#/components/schemas/User",
            "description": "the ids and User objects"
        },
        "members": {
            "$ref": "#/components/schemas/GuildMember",
            "description": "the ids and partial Member objects"
        },
        "roles": {
            "$ref": "#/components/schemas/Role",
            "description": "the ids and Role objects"
        },
        "channels": {
            "$ref": "#/components/schemas/Channel",
            "description": "the ids and partial Channel objects"
        },
        "messages": {
            "$ref": "#/components/schemas/Message",
            "description": "the ids and partial Message objects"
        },
        "attachments": {
            "$ref": "#/components/schemas/Attachment",
            "description": "the ids and attachment objects"
        }
    },
    "required": [
        "members",
        "channels"
    ]
};
