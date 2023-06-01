export const Hello = {
    "type": "object",
    "properties": {
        "heartbeat_interval": {
            "type": "integer",
            "description": "Interval (in milliseconds) an app should heartbeat with"
        }
    },
    "required": [
        "heartbeat_interval"
    ]
};
