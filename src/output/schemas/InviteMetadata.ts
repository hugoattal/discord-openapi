export const InviteMetadata = {
    "type": "object",
    "properties": {
        "uses": {
            "type": "integer",
            "description": "number of times this invite has been used"
        },
        "max_uses": {
            "type": "integer",
            "description": "max number of times this invite can be used"
        },
        "max_age": {
            "type": "integer",
            "description": "duration (in seconds) after which the invite expires"
        },
        "temporary": {
            "type": "boolean",
            "description": "whether this invite only grants temporary membership"
        },
        "created_at": {
            "type": "string",
            "description": "when this invite was created",
            "format": "date-time"
        }
    },
    "required": [
        "uses",
        "max_uses",
        "max_age",
        "temporary",
        "created_at"
    ]
};
