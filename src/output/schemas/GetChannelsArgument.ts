export const GetChannelsArgument = {
    "type": "object",
    "properties": {
        "guild_id": {
            "type": "string",
            "description": "id of the guild to get channels for"
        }
    },
    "required": [
        "guild_id"
    ]
};
