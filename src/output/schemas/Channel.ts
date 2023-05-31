export const Channel = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "the id of this channel"
        },
        "type": {
            "type": "integer",
            "description": "the [type of channel](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types)"
        },
        "guild_id": {
            "type": "string",
            "description": "the id of the guild (may be missing for some channel objects received over gateway guild dispatches)"
        },
        "position": {
            "type": "integer",
            "description": "sorting position of the channel"
        },
        "permission_overwrites": {
            "$ref": "#/components/schemas/Overwrite",
            "description": "explicit permission overwrites for members and roles"
        },
        "name": {
            "type": "string",
            "description": "the name of the channel (1-100 characters)"
        },
        "topic": {
            "type": "string",
            "description": "the channel topic (0-4096 characters for `GUILD_FORUM` channels, 0-1024 characters for all others)"
        },
        "nsfw": {
            "type": "boolean",
            "description": "whether the channel is nsfw"
        },
        "last_message_id": {
            "type": "string",
            "description": "the id of the last message sent in this channel (or thread for `GUILD_FORUM` channels) (may not point to an existing or valid message or thread)"
        },
        "bitrate": {
            "type": "integer",
            "description": "the bitrate (in bits) of the voice channel"
        },
        "user_limit": {
            "type": "integer",
            "description": "the user limit of the voice channel"
        },
        "rate_limit_per_user": {
            "type": "integer",
            "description": "amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `manage_messages` or `manage_channel`, are unaffected"
        },
        "recipients": {
            "$ref": "#/components/schemas/User",
            "description": "the recipients of the DM"
        },
        "icon": {
            "type": "string",
            "description": "icon hash of the group DM"
        },
        "owner_id": {
            "type": "string",
            "description": "id of the creator of the group DM or thread"
        },
        "application_id": {
            "type": "string",
            "description": "application id of the group DM creator if it is bot-created"
        },
        "managed": {
            "type": "boolean",
            "description": "for group DM channels: whether the channel is managed by an application via the `gdm.join` OAuth2 scope"
        },
        "parent_id": {
            "type": "string",
            "description": "for guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created"
        },
        "last_pin_timestamp": {
            "type": "string",
            "description": "when the last pinned message was pinned. This may be `null` in events such as `GUILD_CREATE` when a message is not pinned.",
            "format": "date-time"
        },
        "rtc_region": {
            "type": "string",
            "description": "[voice region](#DOCS_RESOURCES_VOICE/voice-region-object) id for the voice channel, automatic when set to null"
        },
        "video_quality_mode": {
            "type": "integer",
            "description": "the camera [video quality mode](#DOCS_RESOURCES_CHANNEL/channel-object-video-quality-modes) of the voice channel, 1 when not present"
        },
        "message_count": {
            "type": "integer",
            "description": "number of messages (not including the initial message or deleted messages) in a thread."
        },
        "member_count": {
            "type": "integer",
            "description": "an approximate count of users in a thread, stops counting at 50"
        },
        "thread_metadata": {
            "$ref": "#/components/schemas/ThreadMetadata",
            "description": "thread-specific fields not needed by other channels"
        },
        "member": {
            "$ref": "#/components/schemas/ThreadMember",
            "description": "thread member object for the current user, if they have joined the thread, only included on certain API endpoints"
        },
        "default_auto_archive_duration": {
            "type": "integer",
            "description": "default duration, copied onto newly created threads, in minutes, threads will stop showing in the channel list after the specified period of inactivity, can be set to: 60, 1440, 4320, 10080"
        },
        "permissions": {
            "type": "string",
            "description": "computed permissions for the invoking user in the channel, including overwrites, only included when part of the `resolved` data received on a slash command interaction"
        },
        "flags": {
            "type": "integer",
            "description": "[channel flags](#DOCS_RESOURCES_CHANNEL/channel-object-channel-flags) combined as a [bitfield](https://en.wikipedia.org/wiki/Bit_field)"
        },
        "total_message_sent": {
            "type": "integer",
            "description": "number of messages ever sent in a thread, it's similar to `message_count` on message creation, but will not decrement the number when a message is deleted"
        },
        "available_tags": {
            "$ref": "#/components/schemas/ForumTag",
            "description": "the set of tags that can be used in a `GUILD_FORUM` channel"
        },
        "applied_tags": {
            "type": "array",
            "description": "the IDs of the set of tags that have been applied to a thread in a `GUILD_FORUM` channel",
            "items": {
                "type": "string"
            }
        },
        "default_reaction_emoji": {
            "$ref": "#/components/schemas/DefaultReaction",
            "description": "the emoji to show in the add reaction button on a thread in a `GUILD_FORUM` channel"
        },
        "default_thread_rate_limit_per_user": {
            "type": "integer",
            "description": "the initial `rate_limit_per_user` to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update."
        },
        "default_sort_order": {
            "type": "integer",
            "description": "the [default sort order type](#DOCS_RESOURCES_CHANNEL/channel-object-sort-order-types) used to order posts in `GUILD_FORUM` channels. Defaults to `null`, which indicates a preferred sort order hasn't been set by a channel admin"
        },
        "default_forum_layout": {
            "type": "integer",
            "description": "the [default forum layout view](#DOCS_RESOURCES_CHANNEL/channel-object-forum-layout-types) used to display posts in `GUILD_FORUM` channels. Defaults to `0`, which indicates a layout view has not been set by a channel admin"
        }
    },
    "required": [
        "id",
        "type",
        "rate_limit_per_user",
        "message_count"
    ]
};
