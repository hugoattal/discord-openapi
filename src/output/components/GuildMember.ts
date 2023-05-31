export const GuildMember = {
    "type": "object",
    "properties": {
        "user": {
            "$ref": "User",
            "description": "the user this guild member represents"
        },
        "nick": {
            "type": "string",
            "description": "this user's guild nickname"
        },
        "avatar": {
            "type": "string",
            "description": "the member's [guild avatar hash](#DOCS_REFERENCE/image-formatting)"
        },
        "roles": {
            "type": "array of snowflakes",
            "description": "array of [role](#DOCS_TOPICS_PERMISSIONS/role-object) object ids"
        },
        "joined_at": {
            "type": "string",
            "description": "when the user joined the guild",
            "format": "date-time"
        },
        "premium_since": {
            "type": "string",
            "description": "when the user started [boosting](https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-) the guild",
            "format": "date-time"
        },
        "deaf": {
            "type": "boolean",
            "description": "whether the user is deafened in voice channels"
        },
        "mute": {
            "type": "boolean",
            "description": "whether the user is muted in voice channels"
        },
        "flags": {
            "type": "integer",
            "description": "[guild member flags](#DOCS_RESOURCES_GUILD/guild-member-object-guild-member-flags) represented as a bit set, defaults to `0`"
        },
        "pending": {
            "type": "boolean",
            "description": "whether the user has not yet passed the guild's [Membership Screening](#DOCS_RESOURCES_GUILD/membership-screening-object) requirements"
        },
        "permissions": {
            "type": "string",
            "description": "total permissions of the member in the channel, including overwrites, returned when in the interaction object"
        },
        "communication_disabled_until": {
            "type": "string",
            "description": "when the user's [timeout](https://support.discord.com/hc/en-us/articles/4413305239191-Time-Out-FAQ) will expire and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed out",
            "format": "date-time"
        }
    },
    "required": [
        "roles",
        "joined_at",
        "deaf",
        "mute",
        "flags"
    ]
}