export const Connection = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "id of the connection account"
        },
        "name": {
            "type": "string",
            "description": "the username of the connection account"
        },
        "type": {
            "type": "string",
            "description": "the [service](#DOCS_RESOURCES_USER/connection-object-services) of this connection"
        },
        "revoked": {
            "type": "boolean",
            "description": "whether the connection is revoked"
        },
        "integrations": {
            "type": "array",
            "description": "an array of partial [server integrations](#DOCS_RESOURCES_GUILD/integration-object)",
            "items": {
                "$ref": "#/components/schemas/Integration"
            }
        },
        "verified": {
            "type": "boolean",
            "description": "whether the connection is verified"
        },
        "friend_sync": {
            "type": "boolean",
            "description": "whether friend sync is enabled for this connection"
        },
        "show_activity": {
            "type": "boolean",
            "description": "whether activities related to this connection will be shown in presence updates"
        },
        "two_way_link": {
            "type": "boolean",
            "description": "whether this connection has a corresponding third party OAuth2 token"
        },
        "visibility": {
            "type": "integer",
            "description": "[visibility](#DOCS_RESOURCES_USER/connection-object-visibility-types) of this connection"
        }
    },
    "required": [
        "id",
        "name",
        "type",
        "verified",
        "friend_sync",
        "show_activity",
        "two_way_link",
        "visibility"
    ]
};
