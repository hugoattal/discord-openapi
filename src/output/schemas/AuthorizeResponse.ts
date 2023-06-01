export const AuthorizeResponse = {
    "type": "object",
    "properties": {
        "code": {
            "type": "string",
            "description": "OAuth2 authorization code"
        }
    },
    "required": [
        "code"
    ]
};
