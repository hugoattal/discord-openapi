export const AuditLogChange = {
    "type": "object",
    "properties": {
        "new_value": {
            "type": "object",
            "description": "New value of the key"
        },
        "old_value": {
            "type": "object",
            "description": "Old value of the key"
        },
        "key": {
            "type": "string",
            "description": "Name of the changed entity, with a few [exceptions](#DOCS_RESOURCES_AUDIT_LOG/audit-log-change-object-audit-log-change-exceptions)"
        }
    },
    "required": [
        "key"
    ]
};
