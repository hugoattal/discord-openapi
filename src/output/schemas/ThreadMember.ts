export const ThreadMember = {
    "type": "object",
    "properties": {
        "id ": {
            "type": "string",
            "description": "ID of the thread"
        },
        "user_id ": {
            "type": "string",
            "description": "ID of the user"
        },
        "join_timestamp": {
            "type": "string",
            "description": "Time the user last joined the thread",
            "format": "date-time"
        },
        "flags": {
            "type": "integer",
            "description": "Any user-thread settings, currently only used for notifications"
        },
        "member  ": {
            "$ref": "#/components/schemas/GuildMember",
            "description": "Additional information about the user"
        }
    },
    "required": [
        "id ",
        "user_id ",
        "join_timestamp",
        "flags",
        "member  "
    ]
};
