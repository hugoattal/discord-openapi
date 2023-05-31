export const Overwrite = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "role or user id"
        },
        "type": {
            "type": "integer",
            "description": "either 0 (role) or 1 (member)"
        },
        "allow": {
            "type": "string",
            "description": "permission bit set"
        },
        "deny": {
            "type": "string",
            "description": "permission bit set"
        }
    },
    "required": [
        "id",
        "type",
        "allow",
        "deny"
    ]
};
