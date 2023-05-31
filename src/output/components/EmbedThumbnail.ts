export const EmbedThumbnail = {
    "type": "object",
    "properties": {
        "url": {
            "type": "string",
            "description": "source url of thumbnail (only supports http(s) and attachments)"
        },
        "proxy_url": {
            "type": "string",
            "description": "a proxied url of the thumbnail"
        },
        "height": {
            "type": "integer",
            "description": "height of thumbnail"
        },
        "width": {
            "type": "integer",
            "description": "width of thumbnail"
        }
    },
    "required": [
        "url"
    ]
}