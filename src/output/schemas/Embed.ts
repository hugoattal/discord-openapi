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
            "type": "object",
            "description": "footer information"
        },
        "image": {
            "type": "object",
            "description": "image information"
        },
        "thumbnail": {
            "type": "object",
            "description": "thumbnail information"
        },
        "video": {
            "type": "object",
            "description": "video information"
        },
        "provider": {
            "type": "object",
            "description": "provider information"
        },
        "author": {
            "type": "object",
            "description": "author information"
        },
        "fields": {
            "type": "array",
            "description": "fields information",
            "items": {
                "type": "object"
            }
        }
    }
};
