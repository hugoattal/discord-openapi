export const SelectTextChannelArgument = {
    "type": "object",
    "properties": {
        "channel_id": {
            "type": "string",
            "description": "channel id to join (or `null` to leave)"
        },
        "timeout": {
            "type": "integer",
            "description": "asynchronously join channel with time to wait before timing out"
        }
    },
    "required": [
        "channel_id",
        "timeout"
    ]
};
