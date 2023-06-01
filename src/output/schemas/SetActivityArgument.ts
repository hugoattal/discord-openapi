export const SetActivityArgument = {
    "type": "object",
    "properties": {
        "pid": {
            "type": "integer",
            "description": "the application's process id"
        },
        "activity": {
            "$ref": "#/components/schemas/Activity",
            "description": "the rich presence to assign to the user"
        }
    },
    "required": [
        "pid",
        "activity"
    ]
};
