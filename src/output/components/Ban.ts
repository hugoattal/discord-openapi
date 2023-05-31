export const Ban = {
    "type": "object",
    "properties": {
        "reason": {
            "type": "string",
            "description": "the reason for the ban"
        },
        "user": {
            "$ref": "Userobject",
            "description": "the banned user"
        }
    },
    "required": [
        "reason",
        "user"
    ]
}