export const Device = {
    "type": "object",
    "properties": {
        "type": {
            "type": "object",
            "description": "the type of device"
        },
        "id": {
            "type": "string",
            "description": "the device's Windows UUID"
        },
        "vendor": {
            "$ref": "#/components/schemas/Vendor",
            "description": "the hardware vendor"
        },
        "model": {
            "$ref": "#/components/schemas/Model",
            "description": "the model of the product"
        },
        "related": {
            "type": "array",
            "description": "UUIDs of related devices",
            "items": {
                "type": "string"
            }
        },
        "echo_cancellation": {
            "type": "boolean",
            "description": "if the device's native echo cancellation is enabled"
        },
        "noise_suppression": {
            "type": "boolean",
            "description": "if the device's native noise suppression is enabled"
        },
        "automatic_gain_control": {
            "type": "boolean",
            "description": "if the device's native automatic gain control is enabled"
        },
        "hardware_mute": {
            "type": "boolean",
            "description": "if the device is hardware muted"
        }
    },
    "required": [
        "type",
        "id",
        "vendor",
        "model",
        "related"
    ]
};
