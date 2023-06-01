export const Resume = {
    "type": "object",
    "properties": {
        "token": {
            "type": "string",
            "description": "Session token"
        },
        "session_id": {
            "type": "string",
            "description": "Session ID"
        },
        "seq": {
            "type": "integer",
            "description": "Last sequence number received"
        }
    },
    "required": [
        "token",
        "session_id",
        "seq"
    ]
};
