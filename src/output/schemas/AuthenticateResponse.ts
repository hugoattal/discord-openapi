export const AuthenticateResponse = {
    "type": "object",
    "properties": {
        "user": {
            "$ref": "#/components/schemas/User",
            "description": "the authed user"
        },
        "scopes": {
            "type": "array",
            "description": "authorized scopes",
            "items": {
                "type": "object"
            }
        },
        "expires": {
            "type": "string",
            "description": "expiration date of OAuth2 token",
            "format": "date-time"
        },
        "application": {
            "type": "object",
            "description": "application the user authorized"
        }
    },
    "required": [
        "user",
        "scopes",
        "expires",
        "application"
    ]
};
