export const AutoModerationAction = {
    "type": "object",
    "properties": {
        "type": {
            "type": "unknown",
            "description": "the type of action"
        },
        "metadata *": {
            "type": "unknown",
            "description": "additional metadata needed during execution for this specific action type"
        }
    },
    "required": [
        "type",
        "metadata *"
    ]
}