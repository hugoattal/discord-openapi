export const RateLimitResponse = {
    "type": "object",
    "properties": {
        "message": {
            "type": "string",
            "description": "A message saying you are being rate limited."
        },
        "retry_after": {
            "type": "number",
            "description": "The number of seconds to wait before submitting another request."
        },
        "global": {
            "type": "boolean",
            "description": "A value indicating if you are being globally rate limited or not"
        },
        "code": {
            "type": "integer",
            "description": "An [error code](#DOCS_TOPICS_OPCODES_AND_STATUS_CODES/json) for some limits"
        }
    },
    "required": [
        "message",
        "retry_after",
        "global"
    ]
};
