export const MessageActivity = {
    "type": "object",
    "properties": {
        "type": {
            "type": "integer",
            "description": "[type of message activity](#DOCS_RESOURCES_CHANNEL/message-object-message-activity-types)"
        },
        "party_id": {
            "type": "string",
            "description": "party_id from a [Rich Presence event](#DOCS_RICH_PRESENCE_HOW_TO/updating-presence-update-presence-payload-fields)"
        }
    },
    "required": [
        "type"
    ]
};
