export const GuildWidgetSettings = {
    "type": "object",
    "properties": {
        "enabled": {
            "type": "boolean",
            "description": "whether the widget is enabled"
        },
        "channel_id": {
            "type": "string",
            "description": "the widget channel id"
        }
    },
    "required": [
        "enabled",
        "channel_id"
    ]
};
