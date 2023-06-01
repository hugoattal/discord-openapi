export const ForumThreadMessageParams = {
    "type": "object",
    "properties": {
        "content": {
            "type": "string",
            "description": "Message contents (up to 2000 characters)"
        },
        "embeds": {
            "type": "array",
            "description": "Up to 10 `rich` embeds (up to 6000 characters)",
            "items": {
                "$ref": "#/components/schemas/Embed"
            }
        },
        "allowed_mentions": {
            "$ref": "#/components/schemas/AllowedMentions",
            "description": "Allowed mentions for the message"
        },
        "components": {
            "type": "array",
            "description": "Components to include with the message",
            "items": {
                "$ref": "#/components/schemas/Component"
            }
        },
        "sticker_ids": {
            "type": "array",
            "description": "IDs of up to 3 [stickers](#DOCS_RESOURCES_STICKER/sticker-object) in the server to send in the message",
            "items": {
                "type": "string"
            }
        },
        "payload_json": {
            "type": "string",
            "description": "JSON-encoded body of non-file params, only for `multipart/form-data` requests. See [Uploading Files](#DOCS_REFERENCE/uploading-files)"
        },
        "attachments": {
            "type": "array",
            "description": "Attachment objects with `filename` and `description`. See [Uploading Files](#DOCS_REFERENCE/uploading-files)",
            "items": {
                "$ref": "#/components/schemas/Attachment"
            }
        },
        "flags": {
            "type": "integer",
            "description": "[Message flags](#DOCS_RESOURCES_CHANNEL/message-object-message-flags) combined as a [bitfield](https://en.wikipedia.org/wiki/Bit_field) (only `SUPPRESS_EMBEDS` and `SUPPRESS_NOTIFICATIONS` can be set)"
        }
    },
    "required": [
        "content",
        "embeds",
        "components",
        "sticker_ids",
        "files"
    ]
};
