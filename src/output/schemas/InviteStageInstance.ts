export const InviteStageInstance = {
    "type": "object",
    "properties": {
        "members": {
            "type": "array",
            "description": "the members speaking in the Stage",
            "items": {
                "$ref": "#/components/schemas/GuildMember"
            }
        },
        "participant_count": {
            "type": "integer",
            "description": "the number of users in the Stage"
        },
        "speaker_count": {
            "type": "integer",
            "description": "the number of users speaking in the Stage"
        },
        "topic": {
            "type": "string",
            "description": "the topic of the Stage instance (1-120 characters)"
        }
    },
    "required": [
        "members",
        "participant_count",
        "speaker_count",
        "topic"
    ]
};
