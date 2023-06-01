export const GetChannelResponse = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "channel id"
        },
        "guild_id": {
            "type": "string",
            "description": "channel's guild id"
        },
        "name": {
            "type": "string",
            "description": "channel name"
        },
        "type": {
            "type": "integer",
            "description": "channel type (guild text: 0, guild voice: 2, dm: 1, group dm: 3)"
        },
        "topic": {
            "type": "string",
            "description": "(text) channel topic"
        },
        "bitrate": {
            "type": "integer",
            "description": "(voice) bitrate of voice channel"
        },
        "user_limit": {
            "type": "integer",
            "description": "(voice) user limit of voice channel (0 for none)"
        },
        "position": {
            "type": "integer",
            "description": "position of channel in channel list"
        },
        "voice_states": {
            "type": "array",
            "description": "(voice) channel's voice states",
            "items": {
                "$ref": "#/components/schemas/VoiceState"
            }
        },
        "messages": {
            "type": "array",
            "description": "(text) channel's messages",
            "items": {
                "$ref": "#/components/schemas/Message"
            }
        }
    },
    "required": [
        "id",
        "guild_id",
        "name",
        "type",
        "topic",
        "bitrate",
        "user_limit",
        "position",
        "voice_states",
        "messages"
    ]
};
