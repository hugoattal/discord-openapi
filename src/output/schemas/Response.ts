export const Response = {
    "type": "object",
    "properties": {
        "application": {
            "$ref": "#/components/schemas/Application",
            "description": "the current application"
        },
        "scopes": {
            "type": "array",
            "description": "the scopes the user has authorized the application for",
            "items": {
                "type": "string"
            }
        },
        "expires": {
            "type": "string",
            "description": "when the access token expires",
            "format": "date-time"
        },
        "user": {
            "$ref": "#/components/schemas/User",
            "description": "the user who has authorized, if the user has authorized with the `identify` scope"
        }
    },
    "required": [
        "application",
        "scopes",
        "expires"
    ]
};
