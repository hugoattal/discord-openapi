export const InstallParams = {
    "type": "object",
    "properties": {
        "scopes": {
            "type": "array of strings",
            "description": "the [scopes](#DOCS_TOPICS_OAUTH2/shared-resources-oauth2-scopes) to add the application to the server with"
        },
        "permissions": {
            "type": "string",
            "description": "the [permissions](#DOCS_TOPICS_PERMISSIONS) to request for the bot role"
        }
    },
    "required": [
        "scopes",
        "permissions"
    ]
}