export const GetGuildArgument = {
    "type": "object",
    "properties": {
        "guild_id": {
            "type": "string",
            "description": "id of the guild to get"
        },
        "timeout": {
            "type": "integer",
            "description": "asynchronously get guild with time to wait before timing out"
        }
    },
    "required": [
        "guild_id",
        "timeout"
    ]
};
