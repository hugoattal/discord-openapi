export const PromptOption = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "ID of the prompt option"
        },
        "channel_ids": {
            "type": "array of snowflakes",
            "description": "IDs for channels a member is added to when the option is selected"
        },
        "role_ids": {
            "type": "array of snowflakes",
            "description": "IDs for roles assigned to a member when the option is selected"
        },
        "emoji": {
            "$ref": "Emoji",
            "description": "Emoji of the option"
        },
        "title": {
            "type": "string",
            "description": "Title of the option"
        },
        "description": {
            "type": "string",
            "description": "Description of the option"
        }
    },
    "required": [
        "id",
        "channel_ids",
        "role_ids",
        "emoji",
        "title",
        "description"
    ]
}