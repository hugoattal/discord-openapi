export const ChannelCreateDispatchData = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "channel id"
        },
        "name": {
            "type": "string",
            "description": "name of the channel"
        },
        "type": {
            "type": "integer",
            "description": "channel type (guild text: 0, guild voice: 2, dm: 1, group dm: 3)"
        }
    },
    "required": [
        "id",
        "name",
        "type"
    ]
};
