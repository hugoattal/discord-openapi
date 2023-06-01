export const MessageComponentData = {
    "type": "object",
    "properties": {
        "custom_id": {
            "type": "string",
            "description": "the [`custom_id`](#DOCS_INTERACTIONS_MESSAGE_COMPONENTS/custom-id) of the component"
        },
        "component_type": {
            "type": "integer",
            "description": "the [type](#DOCS_INTERACTIONS_MESSAGE_COMPONENTS/component-object-component-types) of the component"
        },
        "values": {
            "type": "array",
            "description": "values the user selected in a [select menu](#DOCS_INTERACTIONS_MESSAGE_COMPONENTS/select-menu-object) component",
            "items": {
                "type": "object"
            }
        }
    },
    "required": [
        "custom_id",
        "component_type",
        "values"
    ]
};
