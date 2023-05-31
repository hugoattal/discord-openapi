export const Embed = {
    "type": "object",
    "properties": {
        "title": {
            "type": "string",
            "description": "title of embed"
        },
        "type": {
            "type": "string",
            "description": "[type of embed](#DOCS_RESOURCES_CHANNEL/embed-object-embed-types) (always \"rich\" for webhook embeds)"
        },
        "description": {
            "type": "string",
            "description": "description of embed"
        },
        "url": {
            "type": "string",
            "description": "url of embed"
        },
        "timestamp": {
            "type": "string",
            "description": "timestamp of embed content",
            "format": "date-time"
        },
        "color": {
            "type": "integer",
            "description": "color code of the embed"
        },
        "footer": {
            "type": "unknown",
            "description": "footer information"
        },
        "image": {
            "type": "unknown",
            "description": "image information"
        },
        "thumbnail": {
            "type": "unknown",
            "description": "thumbnail information"
        },
        "video": {
            "type": "unknown",
            "description": "video information"
        },
        "provider": {
            "type": "unknown",
            "description": "provider information"
        },
        "author": {
            "type": "unknown",
            "description": "author information"
        },
        "fields": {
            "type": "unknown",
            "description": "fields information"
        }
    },
    "required": []
};
