export const VoiceState = {
    "type": "object",
    "properties": {
        "guild_id": {
            "type": "string",
            "description": "the guild id this voice state is for"
        },
        "channel_id": {
            "type": "string",
            "description": "the channel id this user is connected to"
        },
        "user_id": {
            "type": "string",
            "description": "the user id this voice state is for"
        },
        "member": {
            "$ref": "#/components/schemas/GuildMember",
            "description": "the guild member this voice state is for"
        },
        "session_id": {
            "type": "string",
            "description": "the session id for this voice state"
        },
        "deaf": {
            "type": "boolean",
            "description": "whether this user is deafened by the server"
        },
        "mute": {
            "type": "boolean",
            "description": "whether this user is muted by the server"
        },
        "self_deaf": {
            "type": "boolean",
            "description": "whether this user is locally deafened"
        },
        "self_mute": {
            "type": "boolean",
            "description": "whether this user is locally muted"
        },
        "self_stream": {
            "type": "boolean",
            "description": "whether this user is streaming using \"Go Live\""
        },
        "self_video": {
            "type": "boolean",
            "description": "whether this user's camera is enabled"
        },
        "suppress": {
            "type": "boolean",
            "description": "whether this user's permission to speak is denied"
        },
        "request_to_speak_timestamp": {
            "type": "string",
            "description": "the time at which the user requested to speak",
            "format": "date-time"
        }
    },
    "required": [
        "channel_id",
        "user_id",
        "session_id",
        "deaf",
        "mute",
        "self_deaf",
        "self_mute",
        "self_video",
        "suppress",
        "request_to_speak_timestamp"
    ]
};
