export const Webhook = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "the id of the webhook"
        },
        "type": {
            "type": "integer",
            "description": "the [type](#DOCS_RESOURCES_WEBHOOK/webhook-object-webhook-types) of the webhook"
        },
        "guild_id": {
            "type": "string",
            "description": "the guild id this webhook is for, if any"
        },
        "channel_id": {
            "type": "string",
            "description": "the channel id this webhook is for, if any"
        },
        "user": {
            "$ref": "User",
            "description": "the user this webhook was created by (not returned when getting a webhook with its token)"
        },
        "name": {
            "type": "string",
            "description": "the default name of the webhook"
        },
        "avatar": {
            "type": "string",
            "description": "the default user avatar [hash](#DOCS_REFERENCE/image-formatting) of the webhook"
        },
        "token": {
            "type": "string",
            "description": "the secure token of the webhook (returned for Incoming Webhooks)"
        },
        "application_id": {
            "type": "string",
            "description": "the bot/OAuth2 application that created this webhook"
        },
        "source_guild *": {
            "$ref": "Guild",
            "description": "the guild of the channel that this webhook is following (returned for Channel Follower Webhooks)"
        },
        "source_channel *": {
            "$ref": "Channel",
            "description": "the channel that this webhook is following (returned for Channel Follower Webhooks)"
        },
        "url": {
            "type": "string",
            "description": "the url used for executing the webhook (returned by the [webhooks](#DOCS_TOPICS_OAUTH2/webhooks) OAuth2 flow)"
        }
    },
    "required": [
        "id",
        "type",
        "channel_id",
        "name",
        "avatar",
        "application_id",
        "source_guild *",
        "source_channel *"
    ]
}