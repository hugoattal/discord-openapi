export const Guild = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "guild id"
        },
        "name": {
            "type": "string",
            "description": "guild name (2-100 characters, excluding trailing and leading whitespace)"
        },
        "icon": {
            "type": "string",
            "description": "[icon hash](#DOCS_REFERENCE/image-formatting)"
        },
        "icon_hash": {
            "type": "string",
            "description": "[icon hash](#DOCS_REFERENCE/image-formatting), returned when in the template object"
        },
        "splash": {
            "type": "string",
            "description": "[splash hash](#DOCS_REFERENCE/image-formatting)"
        },
        "discovery_splash": {
            "type": "string",
            "description": "[discovery splash hash](#DOCS_REFERENCE/image-formatting); only present for guilds with the \"DISCOVERABLE\" feature"
        },
        "owner ": {
            "type": "boolean",
            "description": "true if [the user](#DOCS_RESOURCES_USER/get-current-user-guilds) is the owner of the guild"
        },
        "owner_id": {
            "type": "string",
            "description": "id of owner"
        },
        "permissions ": {
            "type": "string",
            "description": "total permissions for [the user](#DOCS_RESOURCES_USER/get-current-user-guilds) in the guild (excludes overwrites)"
        },
        "region ": {
            "type": "string",
            "description": "[voice region](#DOCS_RESOURCES_VOICE/voice-region-object) id for the guild (deprecated)"
        },
        "afk_channel_id": {
            "type": "string",
            "description": "id of afk channel"
        },
        "afk_timeout": {
            "type": "integer",
            "description": "afk timeout in seconds"
        },
        "widget_enabled": {
            "type": "boolean",
            "description": "true if the server widget is enabled"
        },
        "widget_channel_id": {
            "type": "string",
            "description": "the channel id that the widget will generate an invite to, or `null` if set to no invite"
        },
        "verification_level": {
            "type": "integer",
            "description": "[verification level](#DOCS_RESOURCES_GUILD/guild-object-verification-level) required for the guild"
        },
        "default_message_notifications": {
            "type": "integer",
            "description": "default [message notifications level](#DOCS_RESOURCES_GUILD/guild-object-default-message-notification-level)"
        },
        "explicit_content_filter": {
            "type": "integer",
            "description": "[explicit content filter level](#DOCS_RESOURCES_GUILD/guild-object-explicit-content-filter-level)"
        },
        "roles": {
            "$ref": "Role",
            "description": "roles in the guild"
        },
        "emojis": {
            "$ref": "Emoji",
            "description": "custom guild emojis"
        },
        "features": {
            "type": "unknown",
            "description": "enabled guild features"
        },
        "mfa_level": {
            "type": "integer",
            "description": "required [MFA level](#DOCS_RESOURCES_GUILD/guild-object-mfa-level) for the guild"
        },
        "application_id": {
            "type": "string",
            "description": "application id of the guild creator if it is bot-created"
        },
        "system_channel_id": {
            "type": "string",
            "description": "the id of the channel where guild notices such as welcome messages and boost events are posted"
        },
        "system_channel_flags": {
            "type": "integer",
            "description": "[system channel flags](#DOCS_RESOURCES_GUILD/guild-object-system-channel-flags)"
        },
        "rules_channel_id": {
            "type": "string",
            "description": "the id of the channel where Community guilds can display rules and/or guidelines"
        },
        "max_presences": {
            "type": "integer",
            "description": "the maximum number of presences for the guild (`null` is always returned, apart from the largest of guilds)"
        },
        "max_members": {
            "type": "integer",
            "description": "the maximum number of members for the guild"
        },
        "vanity_url_code": {
            "type": "string",
            "description": "the vanity url code for the guild"
        },
        "description": {
            "type": "string",
            "description": "the description of a guild"
        },
        "banner": {
            "type": "string",
            "description": "[banner hash](#DOCS_REFERENCE/image-formatting)"
        },
        "premium_tier": {
            "type": "integer",
            "description": "[premium tier](#DOCS_RESOURCES_GUILD/guild-object-premium-tier) (Server Boost level)"
        },
        "premium_subscription_count": {
            "type": "integer",
            "description": "the number of boosts this guild currently has"
        },
        "preferred_locale": {
            "type": "string",
            "description": "the preferred [locale](#DOCS_REFERENCE/locales) of a Community guild; used in server discovery and notices from Discord, and sent in interactions; defaults to \"en-US\""
        },
        "public_updates_channel_id": {
            "type": "string",
            "description": "the id of the channel where admins and moderators of Community guilds receive notices from Discord"
        },
        "max_video_channel_users": {
            "type": "integer",
            "description": "the maximum amount of users in a video channel"
        },
        "max_stage_video_channel_users": {
            "type": "integer",
            "description": "the maximum amount of users in a stage video channel"
        },
        "approximate_member_count": {
            "type": "integer",
            "description": "approximate number of members in this guild, returned from the `GET /guilds/<id>` endpoint when `with_counts` is `true`"
        },
        "approximate_presence_count": {
            "type": "integer",
            "description": "approximate number of non-offline members in this guild, returned from the `GET /guilds/<id>` endpoint when `with_counts` is `true`"
        },
        "welcome_screen": {
            "$ref": "WelcomeScreen",
            "description": "the welcome screen of a Community guild, shown to new members, returned in an [Invite](#DOCS_RESOURCES_INVITE/invite-object)'s guild object"
        },
        "nsfw_level": {
            "type": "integer",
            "description": "[guild NSFW level](#DOCS_RESOURCES_GUILD/guild-object-guild-nsfw-level)"
        },
        "stickers": {
            "$ref": "Sticker",
            "description": "custom guild stickers"
        },
        "premium_progress_bar_enabled": {
            "type": "boolean",
            "description": "whether the guild has the boost progress bar enabled"
        },
        "safety_alerts_channel_id": {
            "type": "string",
            "description": "the id of the channel where admins and moderators of Community guilds receive safety alerts from Discord"
        }
    },
    "required": [
        "id",
        "name",
        "icon",
        "splash",
        "discovery_splash",
        "owner ",
        "owner_id",
        "permissions ",
        "region ",
        "afk_channel_id",
        "afk_timeout",
        "verification_level",
        "default_message_notifications",
        "explicit_content_filter",
        "roles",
        "emojis",
        "features",
        "mfa_level",
        "application_id",
        "system_channel_id",
        "system_channel_flags",
        "rules_channel_id",
        "vanity_url_code",
        "description",
        "banner",
        "premium_tier",
        "preferred_locale",
        "public_updates_channel_id",
        "nsfw_level",
        "premium_progress_bar_enabled",
        "safety_alerts_channel_id"
    ]
}