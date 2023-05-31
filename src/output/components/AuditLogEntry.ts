export const AuditLogEntry = {
    "type": "object",
    "properties": {
        "target_id": {
            "type": "string",
            "description": "ID of the affected entity (webhook, user, role, etc.)"
        },
        "changes": {
            "$ref": "Auditlogchangeobject",
            "description": "Changes made to the target_id"
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
            "$ref": "Auditlogentryobjectauditlogevents",
            "description": "Type of action that occurred"
        },
        "options": {
            "$ref": "Auditlogentryobjectoptionalauditentryinfo",
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
}