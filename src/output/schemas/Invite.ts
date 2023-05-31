export const Invite = {
    "type": "object",
    "properties": {
        "code": {
            "type": "string",
            "description": "the invite code (unique ID)"
        },
        "guild": {
            "$ref": "#/components/schemas/Guild",
            "description": "the guild this invite is for"
        },
        "channel": {
            "$ref": "#/components/schemas/Channel",
            "description": "the channel this invite is for"
        },
        "inviter": {
            "$ref": "#/components/schemas/User",
            "description": "the user who created the invite"
        },
        "target_type": {
            "type": "integer",
            "description": "the [type of target](#DOCS_RESOURCES_INVITE/invite-object-invite-target-types) for this voice channel invite"
        },
        "target_user": {
            "$ref": "#/components/schemas/User",
            "description": "the user whose stream to display for this voice channel stream invite"
        },
        "target_application": {
            "$ref": "#/components/schemas/Application",
            "description": "the embedded application to open for this voice channel embedded application invite"
        },
        "approximate_presence_count": {
            "type": "integer",
            "description": "approximate count of online members, returned from the `GET /invites/<code>` endpoint when `with_counts` is `true`"
        },
        "approximate_member_count": {
            "type": "integer",
            "description": "approximate count of total members, returned from the `GET /invites/<code>` endpoint when `with_counts` is `true`"
        },
        "expires_at": {
            "type": "string",
            "description": "the expiration date of this invite, returned from the `GET /invites/<code>` endpoint when `with_expiration` is `true`",
            "format": "date-time"
        },
        "stage_instance": {
            "$ref": "#/components/schemas/InviteStageInstance",
            "description": "stage instance data if there is a [public Stage instance](#DOCS_RESOURCES_STAGE_INSTANCE) in the Stage channel this invite is for (deprecated)"
        },
        "guild_scheduled_event": {
            "$ref": "#/components/schemas/GuildScheduledEvent",
            "description": "guild scheduled event data, only included if `guild_scheduled_event_id` contains a valid guild scheduled event id"
        }
    },
    "required": [
        "code",
        "channel"
    ]
};
