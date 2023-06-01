export const ModalSubmitData = {
    "type": "object",
    "properties": {
        "custom_id": {
            "type": "string",
            "description": "the [`custom_id`](#DOCS_INTERACTIONS_MESSAGE_COMPONENTS/custom-id) of the modal"
        },
        "components": {
            "type": "array",
            "description": "the values submitted by the user",
            "items": {
                "type": "object"
            }
        }
    },
    "required": [
        "custom_id",
        "components"
    ]
};
