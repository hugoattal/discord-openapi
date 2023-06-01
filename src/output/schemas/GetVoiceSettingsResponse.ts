export const GetVoiceSettingsResponse = {
    "type": "object",
    "properties": {
        "input": {
            "$ref": "#/components/schemas/VoiceSettingsInput",
            "description": "input settings"
        },
        "output": {
            "$ref": "#/components/schemas/VoiceSettingsOutput",
            "description": "output settings"
        },
        "mode": {
            "$ref": "#/components/schemas/VoiceSettingsMode",
            "description": "voice mode settings"
        },
        "automatic_gain_control": {
            "type": "boolean",
            "description": "state of automatic gain control"
        },
        "echo_cancellation": {
            "type": "boolean",
            "description": "state of echo cancellation"
        },
        "noise_suppression": {
            "type": "boolean",
            "description": "state of noise suppression"
        },
        "qos": {
            "type": "boolean",
            "description": "state of voice quality of service"
        },
        "silence_warning": {
            "type": "boolean",
            "description": "state of silence warning notice"
        },
        "deaf": {
            "type": "boolean",
            "description": "state of self-deafen"
        },
        "mute": {
            "type": "boolean",
            "description": "state of self-mute"
        }
    },
    "required": [
        "input",
        "output",
        "mode",
        "automatic_gain_control",
        "echo_cancellation",
        "noise_suppression",
        "qos",
        "silence_warning",
        "deaf",
        "mute"
    ]
};
