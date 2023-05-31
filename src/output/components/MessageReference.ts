export const MessageReference = {
    "type": "object",
    "properties": {
        "message_id": {
            "type": "string",
            "description": "id of the originating message"
        },
        "channel_id ": {
            "type": "string",
            "description": "id of the originating message's channel"
        },
        "guild_id": {
            "type": "string",
            "description": "id of the originating message's guild"
        },
        "fail_if_not_exists": {
            "type": "boolean",
            "description": "when sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true"
        }
    },
    "required": [
        "channel_id "
    ]
}