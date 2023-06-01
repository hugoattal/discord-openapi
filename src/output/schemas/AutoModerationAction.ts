export const AutoModerationAction = {
    "type": "object",
    "properties": {
        "type": {
            "type": "object",
            "description": "the type of action"
        },
        "metadata": {
            "type": "object",
            "description": "additional metadata needed during execution for this specific action type"
        }
    },
    "required": [
        "type"
    ]
};
