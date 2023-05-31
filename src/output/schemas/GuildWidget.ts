export const GuildWidget = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "guild id"
        },
        "name": {
            "type": "string",
            "description": "guild name (2-100 characters)"
        },
        "instant_invite": {
            "type": "string",
            "description": "instant invite for the guilds specified widget invite channel"
        },
        "channels": {
            "type": "array",
            "description": "voice and stage channels which are accessible by @everyone",
            "items": {
                "$ref": "#/components/schemas/Channel"
            }
        },
        "members": {
            "type": "array",
            "description": "special widget user objects that includes users presence (Limit 100)",
            "items": {
                "$ref": "#/components/schemas/User"
            }
        },
        "presence_count": {
            "type": "integer",
            "description": "number of online members in this guild"
        }
    },
    "required": [
        "id",
        "name",
        "instant_invite",
        "channels",
        "members",
        "presence_count"
    ]
};
