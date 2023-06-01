export const GuildStatusDispatchData = {
    "type": "object",
    "properties": {
        "guild": {
            "$ref": "#/components/schemas/Guild",
            "description": "guild with requested id"
        },
        "online": {
            "type": "integer",
            "description": "number of online users in guild (deprecated; always 0)"
        }
    },
    "required": [
        "guild",
        "online"
    ]
};
