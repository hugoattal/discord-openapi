export const RPCServerConfiguration = {
    "type": "object",
    "properties": {
        "cdn_host": {
            "type": "string",
            "description": "server's cdn"
        },
        "api_endpoint": {
            "type": "string",
            "description": "server's api endpoint"
        },
        "environment": {
            "type": "string",
            "description": "server's environment"
        }
    },
    "required": [
        "cdn_host",
        "api_endpoint",
        "environment"
    ]
};
