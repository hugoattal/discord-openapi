export const AuthorizeArgument = {
    "type": "object",
    "properties": {
        "scopes": {
            "type": "array",
            "description": "scopes to authorize",
            "items": {
                "type": "object"
            }
        },
        "client_id": {
            "type": "string",
            "description": "OAuth2 application id"
        },
        "rpc_token": {
            "type": "string",
            "description": "one-time use RPC token"
        },
        "username": {
            "type": "string",
            "description": "username to create a guest account with if the user does not have Discord"
        }
    },
    "required": [
        "scopes",
        "client_id",
        "rpc_token",
        "username"
    ]
};
