export const EmbedFooter = {
    "type": "object",
    "properties": {
        "text": {
            "type": "string",
            "description": "footer text"
        },
        "icon_url": {
            "type": "string",
            "description": "url of footer icon (only supports http(s) and attachments)"
        },
        "proxy_icon_url": {
            "type": "string",
            "description": "a proxied url of footer icon"
        }
    },
    "required": [
        "text"
    ]
};
