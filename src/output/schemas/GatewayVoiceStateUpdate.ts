export const GatewayVoiceStateUpdate = {
    "type": "object",
    "properties": {
        "guild_id": {
            "type": "string",
            "description": "ID of the guild"
        },
        "channel_id": {
            "type": "string",
            "description": "ID of the voice channel client wants to join (null if disconnecting)"
        },
        "self_mute": {
            "type": "boolean",
            "description": "Whether the client is muted"
        },
        "self_deaf": {
            "type": "boolean",
            "description": "Whether the client deafened"
        }
    },
    "required": [
        "guild_id",
        "channel_id",
        "self_mute",
        "self_deaf"
    ]
};
