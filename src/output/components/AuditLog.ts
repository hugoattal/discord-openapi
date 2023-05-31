export const AuditLog = {
    "type": "object",
    "properties": {
        "application_commands": {
            "$ref": "ApplicationCommand",
            "description": "List of application commands referenced in the audit log"
        },
        "audit_log_entries": {
            "$ref": "AuditLogEntry",
            "description": "List of audit log entries, sorted from most to least recent"
        },
        "auto_moderation_rules": {
            "$ref": "AutoModerationRule",
            "description": "List of auto moderation rules referenced in the audit log"
        },
        "guild_scheduled_events": {
            "$ref": "GuildScheduledEvent",
            "description": "List of guild scheduled events referenced in the audit log"
        },
        "integrations": {
            "$ref": "Integration",
            "description": "List of partial integration objects"
        },
        "threads": {
            "$ref": "Channel",
            "description": "List of threads referenced in the audit log\\*"
        },
        "users": {
            "$ref": "User",
            "description": "List of users referenced in the audit log"
        },
        "webhooks": {
            "$ref": "Webhook",
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
}