export const RoleTags = {
    "type": "object",
    "properties": {
        "bot_id": {
            "type": "string",
            "description": "the id of the bot this role belongs to"
        },
        "integration_id": {
            "type": "string",
            "description": "the id of the integration this role belongs to"
        },
        "premium_subscriber": {
            "type": "boolean",
            "description": "whether this is the guild's Booster role"
        },
        "subscription_listing_id": {
            "type": "string",
            "description": "the id of this role's subscription sku and listing"
        },
        "available_for_purchase": {
            "type": "boolean",
            "description": "whether this role is available for purchase"
        },
        "guild_connections": {
            "type": "boolean",
            "description": "whether this role is a guild's linked role"
        }
    }
};
