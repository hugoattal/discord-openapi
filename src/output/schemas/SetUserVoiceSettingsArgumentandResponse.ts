export const SetUserVoiceSettingsArgumentandResponse = {
    "type": "object",
    "properties": {
        "user_id": {
            "type": "string",
            "description": "user id"
        },
        "pan": {
            "$ref": "#/components/schemas/Pan",
            "description": "set the pan of the user"
        },
        "volume": {
            "type": "integer",
            "description": "set the volume of user (defaults to 100, min 0, max 200)"
        },
        "mute": {
            "type": "boolean",
            "description": "set the mute state of the user"
        }
    },
    "required": [
        "user_id"
    ]
};
