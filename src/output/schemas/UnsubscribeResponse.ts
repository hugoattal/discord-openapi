export const UnsubscribeResponse = {
    "type": "object",
    "properties": {
        "evt": {
            "type": "string",
            "description": "event name now unsubscribed from"
        }
    },
    "required": [
        "evt"
    ]
};
