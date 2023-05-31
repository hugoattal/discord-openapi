export const RoleSubscriptionDataObject = {
    "type": "object",
    "properties": {
        "role_subscription_listing_id": {
            "type": "string",
            "description": "the id of the sku and listing that the user is subscribed to"
        },
        "tier_name": {
            "type": "string",
            "description": "the name of the tier that the user is subscribed to"
        },
        "total_months_subscribed": {
            "type": "integer",
            "description": "the cumulative number of months that the user has been subscribed for"
        },
        "is_renewal": {
            "type": "boolean",
            "description": "whether this notification is for a renewal rather than a new purchase"
        }
    },
    "required": [
        "role_subscription_listing_id",
        "tier_name",
        "total_months_subscribed",
        "is_renewal"
    ]
};
