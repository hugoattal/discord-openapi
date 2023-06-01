export const ShortcutKeyCombo = {
    "type": "object",
    "properties": {
        "type": {
            "type": "integer",
            "description": "see [key types](#DOCS_TOPICS_RPC/getvoicesettings-key-types)"
        },
        "code": {
            "type": "integer",
            "description": "key code"
        },
        "name": {
            "type": "string",
            "description": "key name"
        }
    },
    "required": [
        "type",
        "code",
        "name"
    ]
};
