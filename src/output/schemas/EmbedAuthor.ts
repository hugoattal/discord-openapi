export const EmbedAuthor = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "name of author"
        },
        "url": {
            "type": "string",
            "description": "url of author (only supports http(s))"
        },
        "icon_url": {
            "type": "string",
            "description": "url of author icon (only supports http(s) and attachments)"
        },
        "proxy_icon_url": {
            "type": "string",
            "description": "a proxied url of author icon"
        }
    },
    "required": [
        "name"
    ]
};
