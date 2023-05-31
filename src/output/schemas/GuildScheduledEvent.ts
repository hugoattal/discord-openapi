export const GuildScheduledEvent = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "the id of the scheduled event"
        },
        "guild_id": {
            "type": "string",
            "description": "the guild id which the scheduled event belongs to"
        },
        "channel_id": {
            "type": "string",
            "description": "the channel id in which the scheduled event will be hosted, or `null` if [scheduled entity type](#DOCS_RESOURCES_GUILD_SCHEDULED_EVENT/guild-scheduled-event-object-guild-scheduled-event-entity-types) is `EXTERNAL`"
        },
        "creator_id": {
            "type": "string",
            "description": "the id of the user that created the scheduled event *"
        },
        "name": {
            "type": "string",
            "description": "the name of the scheduled event (1-100 characters)"
        },
        "description": {
            "type": "string",
            "description": "the description of the scheduled event (1-1000 characters)"
        },
        "scheduled_start_time": {
            "type": "string",
            "description": "the time the scheduled event will start",
            "format": "date-time"
        },
        "scheduled_end_time": {
            "type": "string",
            "description": "the time the scheduled event will end, required if entity_type is `EXTERNAL`",
            "format": "date-time"
        },
        "privacy_level": {
            "type": "object",
            "description": "the privacy level of the scheduled event"
        },
        "status": {
            "type": "object",
            "description": "the status of the scheduled event"
        },
        "entity_type": {
            "type": "object",
            "description": "the type of the scheduled event"
        },
        "entity_id": {
            "type": "string",
            "description": "the id of an entity associated with a guild scheduled event"
        },
        "entity_metadata": {
            "type": "object",
            "description": "additional metadata for the guild scheduled event"
        },
        "creator": {
            "$ref": "#/components/schemas/User",
            "description": "the user that created the scheduled event"
        },
        "user_count": {
            "type": "integer",
            "description": "the number of users subscribed to the scheduled event"
        },
        "image": {
            "type": "string",
            "description": "the [cover image hash](#DOCS_REFERENCE/image-formatting) of the scheduled event"
        }
    },
    "required": [
        "id",
        "guild_id",
        "channel_id",
        "creator_id",
        "name",
        "scheduled_start_time",
        "scheduled_end_time",
        "privacy_level",
        "status",
        "entity_type",
        "entity_id",
        "entity_metadata"
    ]
};
