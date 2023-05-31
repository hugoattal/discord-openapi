export const Attachment = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "attachment id"
        },
        "filename": {
            "type": "string",
            "description": "name of file attached"
        },
        "description": {
            "type": "string",
            "description": "description for the file (max 1024 characters)"
        },
        "content_type": {
            "type": "string",
            "description": "the attachment's [media type](https://en.wikipedia.org/wiki/Media_type)"
        },
        "size": {
            "type": "integer",
            "description": "size of file in bytes"
        },
        "url": {
            "type": "string",
            "description": "source url of file"
        },
        "proxy_url": {
            "type": "string",
            "description": "a proxied url of file"
        },
        "height": {
            "type": "integer",
            "description": "height of file (if image)"
        },
        "width": {
            "type": "integer",
            "description": "width of file (if image)"
        },
        "ephemeral \\*": {
            "type": "boolean",
            "description": "whether this attachment is ephemeral"
        },
        "duration_secs": {
            "type": "float",
            "description": "the duration of the audio file (currently for voice messages)"
        },
        "waveform": {
            "type": "string",
            "description": "base64 encoded bytearray representing a sampled waveform (currently for voice messages)"
        }
    },
    "required": [
        "id",
        "filename",
        "size",
        "url",
        "proxy_url",
        "ephemeral \\*"
    ]
}