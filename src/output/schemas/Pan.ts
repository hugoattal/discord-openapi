export const Pan = {
    "type": "object",
    "properties": {
        "left": {
            "type": "number",
            "description": "left pan of user (min: 0.0, max: 1.0)"
        },
        "right": {
            "type": "number",
            "description": "right pan of user (min: 0.0, max: 1.0)"
        }
    },
    "required": [
        "left",
        "right"
    ]
};
