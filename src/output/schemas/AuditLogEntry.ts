export const AuditLogEntry = {
    "type": "object",
    "properties": {
        "target_id": {
            "type": "string",
            "description": "ID of the affected entity (webhook, user, role, etc.)"
        },
        "changes": {
            "type": "array",
            "description": "Changes made to the target_id",
            "items": {
                "$ref": "#/components/schemas/AuditLogChange"
            }
        },
        "user_id": {
            "type": "string",
            "description": "User or app that made the changes"
        },
        "id": {
            "type": "string",
            "description": "ID of the entry"
        },
        "action_type": {
            "type": "object",
            "description": "Type of action that occurred"
        },
        "options": {
            "type": "object",
            "description": "Additional info for certain event types"
        },
        "reason": {
            "type": "string",
            "description": "Reason for the change (1-512 characters)"
        }
    },
    "required": [
        "target_id",
        "user_id",
        "id",
        "action_type"
    ]
};
