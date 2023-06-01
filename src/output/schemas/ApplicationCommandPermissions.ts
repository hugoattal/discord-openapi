export const ApplicationCommandPermissions = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "ID of the role, user, or channel. It can also be a [permission constant](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/application-command-permissions-object-application-command-permissions-constants)"
        },
        "type": {
            "type": "object",
            "description": "role (`1`), user (`2`), or channel (`3`)"
        },
        "permission": {
            "type": "boolean",
            "description": "`true` to allow, `false`, to disallow"
        }
    },
    "required": [
        "id",
        "type",
        "permission"
    ]
};
