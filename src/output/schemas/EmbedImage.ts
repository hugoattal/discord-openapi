export const EmbedImage = {
    "type": "object",
    "properties": {
        "url": {
            "type": "string",
            "description": "source url of image (only supports http(s) and attachments)"
        },
        "proxy_url": {
            "type": "string",
            "description": "a proxied url of the image"
        },
        "height": {
            "type": "integer",
            "description": "height of image"
        },
        "width": {
            "type": "integer",
            "description": "width of image"
        }
    },
    "required": [
        "url"
    ]
};
