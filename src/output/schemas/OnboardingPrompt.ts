export const OnboardingPrompt = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "ID of the prompt"
        },
        "type": {
            "type": "unknown",
            "description": "Type of prompt"
        },
        "options": {
            "type": "unknown",
            "description": "Options available within the prompt"
        },
        "title": {
            "type": "string",
            "description": "Title of the prompt"
        },
        "single_select": {
            "type": "boolean",
            "description": "Indicates whether users are limited to selecting one option for the prompt"
        },
        "required": {
            "type": "boolean",
            "description": "Indicates whether the prompt is required before a user completes the onboarding flow"
        },
        "in_onboarding": {
            "type": "boolean",
            "description": "Indicates whether the prompt is present in the onboarding flow. If `false`, the prompt will only appear in the Channels & Roles tab"
        }
    },
    "required": [
        "id",
        "type",
        "options",
        "title",
        "single_select",
        "required",
        "in_onboarding"
    ]
};
