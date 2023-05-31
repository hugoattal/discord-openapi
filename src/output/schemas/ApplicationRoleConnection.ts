export const ApplicationRoleConnection = {
    "type": "object",
    "properties": {
        "platform_name": {
            "type": "string",
            "description": "the vanity name of the platform a bot has connected (max 50 characters)"
        },
        "platform_username": {
            "type": "string",
            "description": "the username on the platform a bot has connected (max 100 characters)"
        },
        "metadata": {
            "type": "object",
            "description": "object mapping [application role connection metadata](#DOCS_RESOURCES_APPLICATION_ROLE_CONNECTION_METADATA/application-role-connection-metadata-object) keys to their `string`-ified value (max 100 characters) for the user on the platform a bot has connected"
        }
    },
    "required": [
        "platform_name",
        "platform_username",
        "metadata"
    ]
};
