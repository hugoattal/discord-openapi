export const NotificationCreateDispatchData = {
    "type": "object",
    "properties": {
        "channel_id": {
            "type": "string",
            "description": "id of channel where notification occurred"
        },
        "message": {
            "$ref": "#/components/schemas/Message",
            "description": "message that generated this notification"
        },
        "icon_url": {
            "type": "string",
            "description": "icon url of the notification"
        },
        "title": {
            "type": "string",
            "description": "title of the notification"
        },
        "body": {
            "type": "string",
            "description": "body of the notification"
        }
    },
    "required": [
        "channel_id",
        "message",
        "icon_url",
        "title",
        "body"
    ]
};
