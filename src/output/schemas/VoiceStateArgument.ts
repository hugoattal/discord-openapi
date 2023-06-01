export const VoiceStateArgument = {
    "type": "object",
    "properties": {
        "channel_id": {
            "type": "string",
            "description": "id of channel to listen to updates of"
        }
    },
    "required": [
        "channel_id"
    ]
};
