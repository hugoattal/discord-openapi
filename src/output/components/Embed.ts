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
            "$ref": "Embedobjectembedfooterstructure",
            "description": "footer information"
        },
        "image": {
            "$ref": "Embedobjectembedimagestructure",
            "description": "image information"
        },
        "thumbnail": {
            "$ref": "Embedobjectembedthumbnailstructure",
            "description": "thumbnail information"
        },
        "video": {
            "$ref": "Embedobjectembedvideostructure",
            "description": "video information"
        },
        "provider": {
            "$ref": "Embedobjectembedproviderstructure",
            "description": "provider information"
        },
        "author": {
            "$ref": "Embedobjectembedauthorstructure",
            "description": "author information"
        },
        "fields": {
            "$ref": "Embedobjectembedfieldstructure",
            "description": "fields information"
        }
    },
    "required": []
}