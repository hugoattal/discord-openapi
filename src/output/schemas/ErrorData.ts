export const ErrorData = {
    "type": "object",
    "properties": {
        "code": {
            "type": "integer",
            "description": "RPC Error Code"
        },
        "message": {
            "type": "string",
            "description": "Error description"
        }
    },
    "required": [
        "code",
        "message"
    ]
};
