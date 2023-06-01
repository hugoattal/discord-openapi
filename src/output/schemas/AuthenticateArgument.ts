export const AuthenticateArgument = {
    "type": "object",
    "properties": {
        "access_token": {
            "type": "string",
            "description": "OAuth2 access token"
        }
    },
    "required": [
        "access_token"
    ]
};
