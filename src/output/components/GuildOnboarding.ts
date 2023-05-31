export const GuildOnboarding = {
    "type": "object",
    "properties": {
        "guild_id": {
            "type": "string",
            "description": "ID of the guild this onboarding is part of"
        },
        "prompts": {
            "type": "unknown",
            "description": "Prompts shown during onboarding and in customize community"
        },
        "default_channel_ids": {
            "type": "array",
            "description": "Channel IDs that members get opted into automatically",
            "items": {
                "type": "string"
            }
        },
        "enabled": {
            "type": "boolean",
            "description": "Whether onboarding is enabled in the guild"
        }
    },
    "required": [
        "guild_id",
        "prompts",
        "default_channel_ids",
        "enabled"
    ]
}