export const GuildCreateDispatchData = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "guild id"
        },
        "name": {
            "type": "string",
            "description": "name of the guild"
        }
    },
    "required": [
        "id",
        "name"
    ]
};
