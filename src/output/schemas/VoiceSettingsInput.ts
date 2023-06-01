export const VoiceSettingsInput = {
    "type": "object",
    "properties": {
        "device_id": {
            "type": "string",
            "description": "device id"
        },
        "volume": {
            "type": "number",
            "description": "input voice level (min: 0, max: 100)"
        },
        "available_devices": {
            "type": "array",
            "description": "array of _read-only_ device objects containing `id` and `name` string keys",
            "items": {
                "type": "object"
            }
        }
    },
    "required": [
        "device_id",
        "volume",
        "available_devices"
    ]
};
