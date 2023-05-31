export const IntegrationApplication = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "the id of the app"
        },
        "name": {
            "type": "string",
            "description": "the name of the app"
        },
        "icon": {
            "type": "string",
            "description": "the [icon hash](#DOCS_REFERENCE/image-formatting) of the app"
        },
        "description": {
            "type": "string",
            "description": "the description of the app"
        },
        "bot": {
            "$ref": "User",
            "description": "the bot associated with this application"
        }
    },
    "required": [
        "id",
        "name",
        "icon",
        "description"
    ]
};
