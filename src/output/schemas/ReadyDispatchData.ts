export const ReadyDispatchData = {
    "type": "object",
    "properties": {
        "v": {
            "type": "integer",
            "description": "RPC version"
        },
        "config": {
            "$ref": "#/components/schemas/RPCServerConfiguration",
            "description": "server configuration"
        },
        "user": {
            "$ref": "#/components/schemas/User",
            "description": "the user to whom you are connected"
        }
    },
    "required": [
        "v",
        "config",
        "user"
    ]
};
