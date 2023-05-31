export const EmbedVideo = {
    "type": "object",
    "properties": {
        "url": {
            "type": "string",
            "description": "source url of video"
        },
        "proxy_url": {
            "type": "string",
            "description": "a proxied url of the video"
        },
        "height": {
            "type": "integer",
            "description": "height of video"
        },
        "width": {
            "type": "integer",
            "description": "width of video"
        }
    },
    "required": []
};
