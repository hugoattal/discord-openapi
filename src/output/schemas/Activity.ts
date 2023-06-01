export const Activity = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Activity's name"
        },
        "type": {
            "type": "integer",
            "description": "[Activity type](#DOCS_TOPICS_GATEWAY_EVENTS/activity-object-activity-types)"
        },
        "url": {
            "type": "string",
            "description": "Stream URL, is validated when type is 1"
        },
        "created_at": {
            "type": "integer",
            "description": "Unix timestamp (in milliseconds) of when the activity was added to the user's session"
        },
        "timestamps": {
            "type": "object",
            "description": "Unix timestamps for start and/or end of the game"
        },
        "application_id": {
            "type": "string",
            "description": "Application ID for the game"
        },
        "details": {
            "type": "string",
            "description": "What the player is currently doing"
        },
        "state": {
            "type": "string",
            "description": "User's current party status"
        },
        "emoji": {
            "type": "object",
            "description": "Emoji used for a custom status"
        },
        "party": {
            "type": "object",
            "description": "Information for the current party of the player"
        },
        "assets": {
            "type": "object",
            "description": "Images for the presence and their hover texts"
        },
        "secrets": {
            "type": "object",
            "description": "Secrets for Rich Presence joining and spectating"
        },
        "instance": {
            "type": "boolean",
            "description": "Whether or not the activity is an instanced game session"
        },
        "flags": {
            "type": "integer",
            "description": "[Activity flags](#DOCS_TOPICS_GATEWAY_EVENTS/activity-object-activity-flags) `OR`d together, describes what the payload includes"
        },
        "buttons": {
            "type": "array",
            "description": "Custom buttons shown in the Rich Presence (max 2)",
            "items": {
                "type": "object"
            }
        }
    },
    "required": [
        "name",
        "type",
        "created_at"
    ]
};
