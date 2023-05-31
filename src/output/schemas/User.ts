export const User = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "the user's id"
        },
        "username": {
            "type": "string",
            "description": "the user's username, not unique across the platform"
        },
        "discriminator": {
            "type": "string",
            "description": "the user's 4-digit discord-tag"
        },
        "avatar": {
            "type": "string",
            "description": "the user's [avatar hash](#DOCS_REFERENCE/image-formatting)"
        },
        "bot": {
            "type": "boolean",
            "description": "whether the user belongs to an OAuth2 application"
        },
        "system": {
            "type": "boolean",
            "description": "whether the user is an Official Discord System user (part of the urgent message system)"
        },
        "mfa_enabled": {
            "type": "boolean",
            "description": "whether the user has two factor enabled on their account"
        },
        "banner": {
            "type": "string",
            "description": "the user's [banner hash](#DOCS_REFERENCE/image-formatting)"
        },
        "accent_color": {
            "type": "integer",
            "description": "the user's banner color encoded as an integer representation of hexadecimal color code"
        },
        "locale": {
            "type": "string",
            "description": "the user's chosen [language option](#DOCS_REFERENCE/locales)"
        },
        "verified": {
            "type": "boolean",
            "description": "whether the email on this account has been verified"
        },
        "email": {
            "type": "string",
            "description": "the user's email"
        },
        "flags": {
            "type": "integer",
            "description": "the [flags](#DOCS_RESOURCES_USER/user-object-user-flags) on a user's account"
        },
        "premium_type": {
            "type": "integer",
            "description": "the [type of Nitro subscription](#DOCS_RESOURCES_USER/user-object-premium-types) on a user's account"
        },
        "public_flags": {
            "type": "integer",
            "description": "the public [flags](#DOCS_RESOURCES_USER/user-object-user-flags) on a user's account"
        }
    },
    "required": [
        "id",
        "username",
        "discriminator",
        "avatar"
    ]
};
