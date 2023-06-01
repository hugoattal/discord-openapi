export const VoiceSettingsMode = {
    "type": "object",
    "properties": {
        "type": {
            "type": "string",
            "description": "voice setting mode type (can be `PUSH_TO_TALK` or `VOICE_ACTIVITY`)"
        },
        "auto_threshold": {
            "type": "boolean",
            "description": "voice activity threshold automatically sets its threshold"
        },
        "threshold": {
            "type": "number",
            "description": "threshold for voice activity (in dB) (min: -100, max: 0)"
        },
        "shortcut": {
            "$ref": "#/components/schemas/ShortcutKeyCombo",
            "description": "shortcut key combos for PTT"
        },
        "delay": {
            "type": "number",
            "description": "the PTT release delay (in ms) (min: 0, max: 2000)"
        }
    },
    "required": [
        "type",
        "auto_threshold",
        "threshold",
        "shortcut",
        "delay"
    ]
};
