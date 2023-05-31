export const ChannelMention = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "id of the channel"
        },
        "guild_id": {
            "type": "string",
            "description": "id of the guild containing the channel"
        },
        "type": {
            "type": "integer",
            "description": "the [type of channel](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types)"
        },
        "name": {
            "type": "string",
            "description": "the name of the channel"
        }
    },
    "required": [
        "id",
        "guild_id",
        "type",
        "name"
    ]
}