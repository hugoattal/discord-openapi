export const WelcomeScreen = {
    "type": "object",
    "properties": {
        "description": {
            "type": "string",
            "description": "the server description shown in the welcome screen"
        },
        "welcome_channels": {
            "type": "array",
            "description": "the channels shown in the welcome screen, up to 5",
            "items": {
                "type": "object"
            }
        }
    },
    "required": [
        "description",
        "welcome_channels"
    ]
};
