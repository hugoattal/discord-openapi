export const GetGuildResponse = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "guild id"
        },
        "name": {
            "type": "string",
            "description": "guild name"
        },
        "icon_url": {
            "type": "string",
            "description": "guild icon url"
        },
        "members": {
            "type": "array",
            "description": "members of the guild (deprecated; always empty array)",
            "items": {
                "$ref": "#/components/schemas/GuildMember"
            }
        }
    },
    "required": [
        "id",
        "name",
        "icon_url",
        "members"
    ]
};
