export const Integration = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "integration id"
        },
        "name": {
            "type": "string",
            "description": "integration name"
        },
        "type": {
            "type": "string",
            "description": "integration type (twitch, youtube, discord, or guild_subscription)"
        },
        "enabled": {
            "type": "boolean",
            "description": "is this integration enabled"
        },
        "syncing": {
            "type": "boolean",
            "description": "is this integration syncing"
        },
        "role_id": {
            "type": "string",
            "description": "id that this integration uses for \"subscribers\""
        },
        "enable_emoticons": {
            "type": "boolean",
            "description": "whether emoticons should be synced for this integration (twitch only currently)"
        },
        "expire_behavior": {
            "type": "object",
            "description": "the behavior of expiring subscribers"
        },
        "expire_grace_period": {
            "type": "integer",
            "description": "the grace period (in days) before expiring subscribers"
        },
        "user": {
            "$ref": "#/components/schemas/User",
            "description": "user for this integration"
        },
        "account": {
            "$ref": "#/components/schemas/IntegrationAccount",
            "description": "integration account information"
        },
        "synced_at": {
            "type": "string",
            "description": "when this integration was last synced",
            "format": "date-time"
        },
        "subscriber_count": {
            "type": "integer",
            "description": "how many subscribers this integration has"
        },
        "revoked": {
            "type": "boolean",
            "description": "has this integration been revoked"
        },
        "application": {
            "$ref": "#/components/schemas/IntegrationApplication",
            "description": "The bot/OAuth2 application for discord integrations"
        },
        "scopes": {
            "type": "array",
            "description": "the scopes the application has been authorized for",
            "items": {
                "type": "object"
            }
        }
    },
    "required": [
        "id",
        "name",
        "type",
        "enabled",
        "account"
    ]
};
