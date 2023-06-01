export const OAuth2Application = {
    "type": "object",
    "properties": {
        "description": {
            "type": "string",
            "description": "application description"
        },
        "icon": {
            "type": "string",
            "description": "hash of the icon"
        },
        "id": {
            "type": "string",
            "description": "application client id"
        },
        "rpc_origins": {
            "type": "array",
            "description": "array of rpc origin urls",
            "items": {
                "type": "string"
            }
        },
        "name": {
            "type": "string",
            "description": "application name"
        }
    },
    "required": [
        "description",
        "icon",
        "id",
        "rpc_origins",
        "name"
    ]
};
