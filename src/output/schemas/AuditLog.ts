export const AuditLog = {
    "type": "object",
    "properties": {
        "application_commands": {
            "$ref": "#/components/schemas/ApplicationCommand",
            "description": "List of application commands referenced in the audit log"
        },
        "audit_log_entries": {
            "$ref": "#/components/schemas/AuditLogEntry",
            "description": "List of audit log entries, sorted from most to least recent"
        },
        "auto_moderation_rules": {
            "$ref": "#/components/schemas/AutoModerationRule",
            "description": "List of auto moderation rules referenced in the audit log"
        },
        "guild_scheduled_events": {
            "$ref": "#/components/schemas/GuildScheduledEvent",
            "description": "List of guild scheduled events referenced in the audit log"
        },
        "integrations": {
            "$ref": "#/components/schemas/Integration",
            "description": "List of partial integration objects"
        },
        "threads": {
            "$ref": "#/components/schemas/Channel",
            "description": "List of threads referenced in the audit log\\*"
        },
        "users": {
            "$ref": "#/components/schemas/User",
            "description": "List of users referenced in the audit log"
        },
        "webhooks": {
            "$ref": "#/components/schemas/Webhook",
            "description": "List of webhooks referenced in the audit log"
        }
    },
    "required": [
        "application_commands",
        "audit_log_entries",
        "auto_moderation_rules",
        "guild_scheduled_events",
        "integrations",
        "threads",
        "users",
        "webhooks"
    ]
};
