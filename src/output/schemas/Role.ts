export const Role = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "role id"
        },
        "name": {
            "type": "string",
            "description": "role name"
        },
        "color": {
            "type": "integer",
            "description": "integer representation of hexadecimal color code"
        },
        "hoist": {
            "type": "boolean",
            "description": "if this role is pinned in the user listing"
        },
        "icon": {
            "type": "string",
            "description": "role [icon hash](#DOCS_REFERENCE/image-formatting)"
        },
        "unicode_emoji": {
            "type": "string",
            "description": "role unicode emoji"
        },
        "position": {
            "type": "integer",
            "description": "position of this role"
        },
        "permissions": {
            "type": "string",
            "description": "permission bit set"
        },
        "managed": {
            "type": "boolean",
            "description": "whether this role is managed by an integration"
        },
        "mentionable": {
            "type": "boolean",
            "description": "whether this role is mentionable"
        },
        "tags": {
            "type": "object",
            "description": "the tags this role has"
        }
    },
    "required": [
        "id",
        "name",
        "color",
        "hoist",
        "position",
        "permissions",
        "managed",
        "mentionable"
    ]
};
