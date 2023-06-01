export const GuildStatusArgument = {
    "type": "object",
    "properties": {
        "guild_id": {
            "type": "string",
            "description": "id of guild to listen to updates of"
        }
    },
    "required": [
        "guild_id"
    ]
};
