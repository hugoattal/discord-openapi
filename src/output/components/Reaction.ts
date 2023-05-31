export const Reaction = {
    "type": "object",
    "properties": {
        "count": {
            "type": "integer",
            "description": "times this emoji has been used to react"
        },
        "me": {
            "type": "boolean",
            "description": "whether the current user reacted using this emoji"
        },
        "emoji": {
            "$ref": "Emoji",
            "description": "emoji information"
        }
    },
    "required": [
        "count",
        "me",
        "emoji"
    ]
}