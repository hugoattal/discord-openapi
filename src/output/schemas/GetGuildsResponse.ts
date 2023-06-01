export const GetGuildsResponse = {
    "type": "object",
    "properties": {
        "guilds": {
            "type": "array",
            "description": "the guilds the user is in",
            "items": {
                "$ref": "#/components/schemas/Guild"
            }
        }
    },
    "required": [
        "guilds"
    ]
};
