export const AutoModerationRule = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "the id of this rule"
        },
        "guild_id": {
            "type": "string",
            "description": "the id of the guild which this rule belongs to"
        },
        "name": {
            "type": "string",
            "description": "the rule name"
        },
        "creator_id": {
            "type": "string",
            "description": "the user which first created this rule"
        },
        "event_type": {
            "type": "integer",
            "description": "the rule [event type](#DOCS_RESOURCES_AUTO_MODERATION/auto-moderation-rule-object-event-types)"
        },
        "trigger_type": {
            "type": "integer",
            "description": "the rule [trigger type](#DOCS_RESOURCES_AUTO_MODERATION/auto-moderation-rule-object-trigger-types)"
        },
        "trigger_metadata": {
            "type": "object",
            "description": "the rule [trigger metadata](#DOCS_RESOURCES_AUTO_MODERATION/auto-moderation-rule-object-trigger-metadata)"
        },
        "actions": {
            "$ref": "Automoderationactionobject",
            "description": "the actions which will execute when the rule is triggered"
        },
        "enabled": {
            "type": "boolean",
            "description": "whether the rule is enabled"
        },
        "exempt_roles": {
            "type": "array of snowflakes",
            "description": "the role ids that should not be affected by the rule (Maximum of 20)"
        },
        "exempt_channels": {
            "type": "array of snowflakes",
            "description": "the channel ids that should not be affected by the rule (Maximum of 50)"
        }
    },
    "required": [
        "id",
        "guild_id",
        "name",
        "creator_id",
        "event_type",
        "trigger_type",
        "trigger_metadata",
        "actions",
        "enabled",
        "exempt_roles",
        "exempt_channels"
    ]
}