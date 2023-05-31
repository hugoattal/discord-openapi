export const FollowedChannel = {
    "type": "object",
    "properties": {
        "channel_id": {
            "type": "string",
            "description": "source channel id"
        },
        "webhook_id": {
            "type": "string",
            "description": "created target webhook id"
        }
    },
    "required": [
        "channel_id",
        "webhook_id"
    ]
}