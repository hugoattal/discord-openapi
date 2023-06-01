export const SelectVoiceChannelArgument = {
    "type": "object",
    "properties": {
        "channel_id": {
            "type": "string",
            "description": "channel id to join (or `null` to leave)"
        },
        "timeout": {
            "type": "integer",
            "description": "asynchronously join channel with time to wait before timing out"
        },
        "force": {
            "type": "boolean",
            "description": "forces a user to join a voice channel"
        }
    },
    "required": [
        "channel_id",
        "timeout",
        "force"
    ]
};
