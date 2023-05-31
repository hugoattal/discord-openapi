export const GuildScheduledEventUser = {
    "type": "object",
    "properties": {
        "guild_scheduled_event_id": {
            "type": "string",
            "description": "the scheduled event id which the user subscribed to"
        },
        "user": {
            "$ref": "User",
            "description": "user which subscribed to an event"
        },
        "member": {
            "$ref": "GuildMember",
            "description": "guild member data for this user for the guild which this event belongs to, if any"
        }
    },
    "required": [
        "guild_scheduled_event_id",
        "user"
    ]
};
