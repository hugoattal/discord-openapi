export const SessionStartLimit = {
    "type": "object",
    "properties": {
        "total": {
            "type": "integer",
            "description": "Total number of session starts the current user is allowed"
        },
        "remaining": {
            "type": "integer",
            "description": "Remaining number of session starts the current user is allowed"
        },
        "reset_after": {
            "type": "integer",
            "description": "Number of milliseconds after which the limit resets"
        },
        "max_concurrency": {
            "type": "integer",
            "description": "Number of identify requests allowed per 5 seconds"
        }
    },
    "required": [
        "total",
        "remaining",
        "reset_after",
        "max_concurrency"
    ]
};
