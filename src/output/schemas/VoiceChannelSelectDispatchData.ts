export const VoiceChannelSelectDispatchData = {
    "type": "object",
    "properties": {
        "channel_id": {
            "type": "string",
            "description": "id of channel (`null` if none)"
        },
        "guild_id": {
            "type": "string",
            "description": "id of guild (`null` if none)"
        }
    },
    "required": [
        "channel_id",
        "guild_id"
    ]
};
