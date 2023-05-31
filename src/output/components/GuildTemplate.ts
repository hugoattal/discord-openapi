export const GuildTemplate = {
    "type": "object",
    "properties": {
        "code": {
            "type": "string",
            "description": "the template code (unique ID)"
        },
        "name": {
            "type": "string",
            "description": "template name"
        },
        "description": {
            "type": "string",
            "description": "the description for the template"
        },
        "usage_count": {
            "type": "integer",
            "description": "number of times this template has been used"
        },
        "creator_id": {
            "type": "string",
            "description": "the ID of the user who created the template"
        },
        "creator": {
            "$ref": "User",
            "description": "the user who created the template"
        },
        "created_at": {
            "type": "string",
            "description": "when this template was created",
            "format": "date-time"
        },
        "updated_at": {
            "type": "string",
            "description": "when this template was last synced to the source guild",
            "format": "date-time"
        },
        "source_guild_id": {
            "type": "string",
            "description": "the ID of the guild this template is based on"
        },
        "serialized_source_guild": {
            "$ref": "Guild",
            "description": "the guild snapshot this template contains"
        },
        "is_dirty": {
            "type": "boolean",
            "description": "whether the template has unsynced changes"
        }
    },
    "required": [
        "code",
        "name",
        "description",
        "usage_count",
        "creator_id",
        "creator",
        "created_at",
        "updated_at",
        "source_guild_id",
        "serialized_source_guild",
        "is_dirty"
    ]
}