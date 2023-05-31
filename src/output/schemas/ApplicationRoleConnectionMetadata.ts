export const ApplicationRoleConnectionMetadata = {
    "type": "object",
    "properties": {
        "type": {
            "type": "unknown",
            "description": "type of metadata value"
        },
        "key": {
            "type": "string",
            "description": "dictionary key for the metadata field (must be `a-z`, `0-9`, or `_` characters; 1-50 characters)"
        },
        "name": {
            "type": "string",
            "description": "name of the metadata field (1-100 characters)"
        },
        "name_localizations": {
            "type": "unknown",
            "description": "translations of the name"
        },
        "description": {
            "type": "string",
            "description": "description of the metadata field (1-200 characters)"
        },
        "description_localizations": {
            "type": "unknown",
            "description": "translations of the description"
        }
    },
    "required": [
        "type",
        "key",
        "name",
        "description"
    ]
};
