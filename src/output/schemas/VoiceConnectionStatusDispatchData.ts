export const VoiceConnectionStatusDispatchData = {
    "type": "object",
    "properties": {
        "state": {
            "type": "string",
            "description": "one of the voice connection states listed below"
        },
        "hostname": {
            "type": "string",
            "description": "hostname of the connected voice server"
        },
        "pings": {
            "type": "array",
            "description": "last 20 pings (in ms)",
            "items": {
                "type": "integer"
            }
        },
        "average_ping": {
            "type": "integer",
            "description": "average ping (in ms)"
        },
        "last_ping": {
            "type": "integer",
            "description": "last ping (in ms)"
        }
    },
    "required": [
        "state",
        "hostname",
        "pings",
        "average_ping",
        "last_ping"
    ]
};
