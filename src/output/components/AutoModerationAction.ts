export const AutoModerationAction = {
    "type": "object",
    "properties": {
        "type": {
            "$ref": "Automoderationactionobjectactiontypes",
            "description": "the type of action"
        },
        "metadata *": {
            "$ref": "Automoderationactionobjectactionmetadata",
            "description": "additional metadata needed during execution for this specific action type"
        }
    },
    "required": [
        "type",
        "metadata *"
    ]
}