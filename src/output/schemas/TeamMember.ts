export const TeamMember = {
    "type": "object",
    "properties": {
        "membership_state": {
            "type": "integer",
            "description": "the user's [membership state](#DOCS_TOPICS_TEAMS/data-models-membership-state-enum) on the team"
        },
        "permissions": {
            "type": "array",
            "description": "will always be `[\"*\"]`",
            "items": {
                "type": "string"
            }
        },
        "team_id": {
            "type": "string",
            "description": "the id of the parent team of which they are a member"
        },
        "user": {
            "$ref": "#/components/schemas/User",
            "description": "the avatar, discriminator, id, and username of the user"
        }
    },
    "required": [
        "membership_state",
        "permissions",
        "team_id",
        "user"
    ]
};
