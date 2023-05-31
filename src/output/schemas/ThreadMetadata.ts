export const ThreadMetadata = {
    "type": "object",
    "properties": {
        "archived": {
            "type": "boolean",
            "description": "whether the thread is archived"
        },
        "auto_archive_duration": {
            "type": "integer",
            "description": "the thread will stop showing in the channel list after `auto_archive_duration` minutes of inactivity, can be set to: 60, 1440, 4320, 10080"
        },
        "archive_timestamp": {
            "type": "string",
            "description": "timestamp when the thread's archive status was last changed, used for calculating recent activity",
            "format": "date-time"
        },
        "locked": {
            "type": "boolean",
            "description": "whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it"
        },
        "invitable": {
            "type": "boolean",
            "description": "whether non-moderators can add other non-moderators to a thread; only available on private threads"
        },
        "create_timestamp": {
            "type": "string",
            "description": "timestamp when the thread was created; only populated for threads created after 2022-01-09",
            "format": "date-time"
        }
    },
    "required": [
        "archived",
        "auto_archive_duration",
        "archive_timestamp",
        "locked"
    ]
};
