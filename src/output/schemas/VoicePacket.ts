export const VoicePacket = {
    "type": "object",
    "properties": {
        "Version": {
            "type": "integer"
        },
        "Payload Type": {
            "type": "integer"
        },
        "Sequence": {
            "type": "integer"
        },
        "Timestamp": {
            "type": "integer"
        },
        "SSRC": {
            "type": "integer"
        }
    },
    "required": [
        "Version",
        "Payload Type",
        "Sequence",
        "Timestamp",
        "SSRC",
        "Encrypted audio"
    ]
};
