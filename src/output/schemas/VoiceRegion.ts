export const VoiceRegion = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "unique ID for the region"
        },
        "name": {
            "type": "string",
            "description": "name of the region"
        },
        "optimal": {
            "type": "boolean",
            "description": "true for a single server that is closest to the current user's client"
        },
        "custom": {
            "type": "boolean",
            "description": "whether this is a custom voice region (used for events/etc)"
        }
    },
    "required": [
        "id",
        "name",
        "optimal",
        "custom"
    ]
};
