export const AuditLog = {
    "type": "object",
    "properties": {
        "application_commands": {
            "type": "array",
            "description": "List of application commands referenced in the audit log",
            "items": {
                "$ref": "#/components/schemas/ApplicationCommand"
            }
        },
        "audit_log_entries": {
            "type": "array",
            "description": "List of audit log entries, sorted from most to least recent",
            "items": {
                "$ref": "#/components/schemas/AuditLogEntry"
            }
        },
        "auto_moderation_rules": {
            "type": "array",
            "description": "List of auto moderation rules referenced in the audit log",
            "items": {
                "$ref": "#/components/schemas/AutoModerationRule"
            }
        },
        "guild_scheduled_events": {
            "type": "array",
            "description": "List of guild scheduled events referenced in the audit log",
            "items": {
                "$ref": "#/components/schemas/GuildScheduledEvent"
            }
        },
        "integrations": {
            "type": "array",
            "description": "List of partial integration objects",
            "items": {
                "$ref": "#/components/schemas/Integration"
            }
        },
        "threads": {
            "type": "array",
            "description": "List of threads referenced in the audit log\\*",
            "items": {
                "$ref": "#/components/schemas/Channel"
            }
        },
        "users": {
            "type": "array",
            "description": "List of users referenced in the audit log",
            "items": {
                "$ref": "#/components/schemas/User"
            }
        },
        "webhooks": {
            "type": "array",
            "description": "List of webhooks referenced in the audit log",
            "items": {
                "$ref": "#/components/schemas/Webhook"
            }
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
