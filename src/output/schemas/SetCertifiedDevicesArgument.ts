export const SetCertifiedDevicesArgument = {
    "type": "object",
    "properties": {
        "devices": {
            "type": "array",
            "description": "a list of devices for your manufacturer, in order of priority",
            "items": {
                "$ref": "#/components/schemas/Device"
            }
        }
    },
    "required": [
        "devices"
    ]
};
