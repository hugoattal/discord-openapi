export const ActivityJoinRequestData = {
    "type": "object",
    "properties": {
        "user": {
            "$ref": "#/components/schemas/User",
            "description": "information about the user requesting to join"
        }
    },
    "required": [
        "user"
    ]
};
