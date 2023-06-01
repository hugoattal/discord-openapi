export const Identify = {
    "type": "object",
    "properties": {
        "token": {
            "type": "string",
            "description": "Authentication token"
        },
        "properties": {
            "type": "object",
            "description": "[Connection properties](#DOCS_TOPICS_GATEWAY_EVENTS/identify-identify-connection-properties)"
        },
        "compress": {
            "type": "boolean",
            "description": "Whether this connection supports compression of packets"
        },
        "large_threshold": {
            "type": "integer",
            "description": "Value between 50 and 250, total number of members where the gateway will stop sending offline members in the guild member list"
        },
        "shard": {
            "type": "array",
            "description": "Used for [Guild Sharding](#DOCS_TOPICS_GATEWAY/sharding)",
            "items": {
                "type": "integer"
            }
        },
        "presence": {
            "type": "object",
            "description": "Presence structure for initial presence information"
        },
        "intents": {
            "type": "integer",
            "description": "[Gateway Intents](#DOCS_TOPICS_GATEWAY/gateway-intents) you wish to receive"
        }
    },
    "required": [
        "token",
        "properties",
        "intents"
    ]
};
