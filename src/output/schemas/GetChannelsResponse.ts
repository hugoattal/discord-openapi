export const GetChannelsResponse = {
    "type": "object",
    "properties": {
        "channels": {
            "type": "array",
            "description": "guild channels the user is in",
            "items": {
                "$ref": "#/components/schemas/Channel"
            }
        }
    },
    "required": [
        "channels"
    ]
};
