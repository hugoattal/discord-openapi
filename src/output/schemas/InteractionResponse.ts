export const InteractionResponse = {
    "type": "object",
    "properties": {
        "type": {
            "type": "object",
            "description": "the type of response"
        },
        "data": {
            "type": "object",
            "description": "an optional response message"
        }
    },
    "required": [
        "type"
    ]
};
