export const Ban = {
    "type": "object",
    "properties": {
        "reason": {
            "type": "string",
            "description": "the reason for the ban"
        },
        "user": {
            "$ref": "User",
            "description": "the banned user"
        }
    },
    "required": [
        "reason",
        "user"
    ]
}