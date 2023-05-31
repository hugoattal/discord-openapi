export const StageInstance = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "The id of this Stage instance"
        },
        "guild_id": {
            "type": "string",
            "description": "The guild id of the associated Stage channel"
        },
        "channel_id": {
            "type": "string",
            "description": "The id of the associated Stage channel"
        },
        "topic": {
            "type": "string",
            "description": "The topic of the Stage instance (1-120 characters)"
        },
        "privacy_level": {
            "type": "integer",
            "description": "The [privacy level](#DOCS_RESOURCES_STAGE_INSTANCE/stage-instance-object-privacy-level) of the Stage instance"
        },
        "discoverable_disabled": {
            "type": "boolean",
            "description": "Whether or not Stage Discovery is disabled (deprecated)"
        },
        "guild_scheduled_event_id": {
            "type": "string",
            "description": "The id of the scheduled event for this Stage instance"
        }
    },
    "required": [
        "id",
        "guild_id",
        "channel_id",
        "topic",
        "privacy_level",
        "discoverable_disabled",
        "guild_scheduled_event_id"
    ]
}