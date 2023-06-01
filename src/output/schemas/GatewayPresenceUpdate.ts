export const GatewayPresenceUpdate = {
    "type": "object",
    "properties": {
        "since": {
            "type": "integer",
            "description": "Unix time (in milliseconds) of when the client went idle, or null if the client is not idle"
        },
        "activities": {
            "type": "array",
            "description": "User's activities",
            "items": {
                "$ref": "#/components/schemas/Activity"
            }
        },
        "status": {
            "type": "string",
            "description": "User's new [status](#DOCS_TOPICS_GATEWAY_EVENTS/update-presence-status-types)"
        },
        "afk": {
            "type": "boolean",
            "description": "Whether or not the client is afk"
        }
    },
    "required": [
        "since",
        "activities",
        "status",
        "afk"
    ]
};
