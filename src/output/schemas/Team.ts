export const Team = {
    "type": "object",
    "properties": {
        "icon": {
            "type": "string",
            "description": "a hash of the image of the team's icon"
        },
        "id": {
            "type": "string",
            "description": "the unique id of the team"
        },
        "members": {
            "type": "array",
            "description": "the members of the team",
            "items": {
                "$ref": "#/components/schemas/TeamMember"
            }
        },
        "name": {
            "type": "string",
            "description": "the name of the team"
        },
        "owner_user_id": {
            "type": "string",
            "description": "the user id of the current team owner"
        }
    },
    "required": [
        "icon",
        "id",
        "members",
        "name",
        "owner_user_id"
    ]
};
