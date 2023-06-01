export const Payload = {
    "type": "object",
    "properties": {
        "cmd": {
            "type": "object",
            "description": "[payload command](#DOCS_TOPICS_RPC/commands-and-events-rpc-commands)"
        },
        "nonce": {
            "type": "string",
            "description": "unique string used once for replies from the server"
        },
        "evt": {
            "type": "object",
            "description": "[subscription event](#DOCS_TOPICS_RPC/commands-and-events-rpc-events)"
        },
        "data": {
            "type": "object",
            "description": "event data"
        },
        "args": {
            "type": "object",
            "description": "command arguments"
        }
    },
    "required": [
        "cmd",
        "nonce",
        "evt",
        "data",
        "args"
    ]
};
