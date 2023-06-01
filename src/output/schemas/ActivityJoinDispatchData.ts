export const ActivityJoinDispatchData = {
    "type": "object",
    "properties": {
        "secret": {
            "type": "string",
            "description": "the [`join_secret`](#DOCS_RICH_PRESENCE_HOW_TO/updating-presence-update-presence-payload-fields) for the given invite"
        }
    },
    "required": [
        "secret"
    ]
};
