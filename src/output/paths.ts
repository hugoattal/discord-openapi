export const paths = {
    "/applications/{application_id}/role-connections/metadata": {
        "get": {
            "operationId": "getApplicationsRoleConnectionsMetadata",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/ApplicationRoleConnectionMetadata"
                                }
                            }
                        }
                    },
                    "description": "Returns a list of application role connection metadata objects for the given application."
                }
            }
        },
        "put": {
            "operationId": "putApplicationsRoleConnectionsMetadata",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Updates and returns a list of application role connection metadata objects for the given application.\r"
                }
            }
        }
    },
    "/guilds/{guild_id}/audit-logs": {
        "get": {
            "operationId": "getGuildsAuditLogs",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AuditLog"
                            }
                        }
                    },
                    "description": "Returns an audit log object for the guild. Requires the `VIEW_AUDIT_LOG` permission.\r"
                }
            }
        }
    },
    "/guilds/{guild_id}/auto-moderation/rules": {
        "get": {
            "operationId": "getGuildsAutoModerationRules",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/AutoModerationRule"
                                }
                            }
                        }
                    },
                    "description": "Get a list of all rules currently configured for the guild. Returns a list of auto moderation rule objects for the given guild.\r"
                }
            }
        },
        "post": {
            "operationId": "postGuildsAutoModerationRules",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AutoModerationRule"
                            }
                        }
                    },
                    "description": "Create a new rule. Returns an auto moderation rule on success. Fires an Auto Moderation Rule Create Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "the rule name"
                                },
                                "event_type": {
                                    "type": "integer",
                                    "description": "the [event type](#DOCS_RESOURCES_AUTO_MODERATION/auto-moderation-rule-object-event-types)"
                                },
                                "trigger_type": {
                                    "type": "integer",
                                    "description": "the [trigger type](#DOCS_RESOURCES_AUTO_MODERATION/auto-moderation-rule-object-trigger-types)"
                                },
                                "trigger_metadata": {
                                    "type": "object",
                                    "description": "the [trigger metadata](#DOCS_RESOURCES_AUTO_MODERATION/auto-moderation-rule-object-trigger-metadata)"
                                },
                                "actions": {
                                    "type": "array",
                                    "description": "the actions which will execute when the rule is triggered",
                                    "items": {
                                        "$ref": "#/components/schemas/AutoModerationAction"
                                    }
                                },
                                "enabled": {
                                    "type": "boolean",
                                    "description": "whether the rule is enabled (False by default)"
                                },
                                "exempt_roles": {
                                    "type": "array",
                                    "description": "the role ids that should not be affected by the rule (Maximum of 20)",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "exempt_channels": {
                                    "type": "array",
                                    "description": "the channel ids that should not be affected by the rule (Maximum of 50)",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            },
                            "required": [
                                "name",
                                "event_type",
                                "trigger_type",
                                "actions"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/guilds/{guild_id}/auto-moderation/rules/{auto_moderation_rule_id}": {
        "get": {
            "operationId": "getGuildsAutoModerationRule",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "auto_moderation_rule_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AutoModerationRule"
                            }
                        }
                    },
                    "description": "Get a single rule. Returns an auto moderation rule object.\r"
                }
            }
        },
        "patch": {
            "operationId": "patchGuildsAutoModerationRule",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "auto_moderation_rule_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/AutoModerationRule"
                            }
                        }
                    },
                    "description": "Modify an existing rule. Returns an auto moderation rule on success. Fires an Auto Moderation Rule Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "the rule name"
                                },
                                "event_type": {
                                    "type": "integer",
                                    "description": "the [event type](#DOCS_RESOURCES_AUTO_MODERATION/auto-moderation-rule-object-event-types)"
                                },
                                "trigger_metadata": {
                                    "type": "object",
                                    "description": "the [trigger metadata](#DOCS_RESOURCES_AUTO_MODERATION/auto-moderation-rule-object-trigger-metadata)"
                                },
                                "actions": {
                                    "type": "array",
                                    "description": "the actions which will execute when the rule is triggered",
                                    "items": {
                                        "$ref": "#/components/schemas/AutoModerationAction"
                                    }
                                },
                                "enabled": {
                                    "type": "boolean",
                                    "description": "whether the rule is enabled"
                                },
                                "exempt_roles": {
                                    "type": "array",
                                    "description": "the role ids that should not be affected by the rule (Maximum of 20)",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "exempt_channels": {
                                    "type": "array",
                                    "description": "the channel ids that should not be affected by the rule (Maximum of 50)",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            },
                            "required": [
                                "name",
                                "event_type",
                                "actions",
                                "enabled",
                                "exempt_roles",
                                "exempt_channels"
                            ]
                        }
                    }
                },
                "required": true
            }
        },
        "delete": {
            "operationId": "deleteGuildsAutoModerationRule",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "auto_moderation_rule_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Delete a rule. Returns a `204` on success. Fires an Auto Moderation Rule Delete Gateway event.\r"
                }
            }
        }
    },
    "/channels/{channel_id}": {
        "get": {
            "operationId": "getChannel",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Channel"
                            }
                        }
                    },
                    "description": "Get a channel by ID. Returns a channel object.  If the channel is a thread, a thread member object is included in the returned result."
                }
            }
        },
        "patch": {
            "operationId": "patchChannel",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Channel"
                            }
                        }
                    },
                    "description": "OK"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "1-100 character channel name"
                                },
                                "archived": {
                                    "type": "boolean",
                                    "description": "whether the thread is archived"
                                },
                                "auto_archive_duration": {
                                    "type": "integer",
                                    "description": "the thread will stop showing in the channel list after `auto_archive_duration` minutes of inactivity, can be set to: 60, 1440, 4320, 10080"
                                },
                                "locked": {
                                    "type": "boolean",
                                    "description": "whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it"
                                },
                                "invitable": {
                                    "type": "boolean",
                                    "description": "whether non-moderators can add other non-moderators to a thread; only available on private threads"
                                },
                                "rate_limit_per_user": {
                                    "type": "integer",
                                    "description": "amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `manage_messages`, `manage_thread`, or `manage_channel`, are unaffected"
                                },
                                "flags": {
                                    "type": "integer",
                                    "description": "[channel flags](#DOCS_RESOURCES_CHANNEL/channel-object-channel-flags) combined as a [bitfield](https://en.wikipedia.org/wiki/Bit_field); `PINNED` can only be set for threads in forum channels"
                                },
                                "applied_tags": {
                                    "type": "array",
                                    "description": "the IDs of the set of tags that have been applied to a thread in a `GUILD_FORUM` channel; limited to 5",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            },
                            "required": [
                                "name",
                                "archived",
                                "auto_archive_duration",
                                "locked",
                                "invitable",
                                "rate_limit_per_user"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/channels/{channel_id}/messages": {
        "get": {
            "operationId": "getChannelsMessages",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/Message"
                                }
                            }
                        }
                    },
                    "description": "Retrieves the messages in a channel. Returns an array of message objects on success.\r"
                }
            }
        },
        "post": {
            "operationId": "postChannelsMessages",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Message"
                            }
                        }
                    },
                    "description": "Post a message to a guild text or DM channel. Returns a message object. Fires a Message Create Gateway event. See message formatting for more information on how to properly format messages.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "content": {
                                    "type": "string",
                                    "description": "Message contents (up to 2000 characters)"
                                },
                                "nonce": {
                                    "type": "integer",
                                    "description": "Can be used to verify a message was sent (up to 25 characters). Value will appear in the [Message Create event](#DOCS_TOPICS_GATEWAY_EVENTS/message-create)."
                                },
                                "tts": {
                                    "type": "boolean",
                                    "description": "`true` if this is a TTS message"
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
                                "message_reference": {
                                    "type": "object",
                                    "description": "Include to make your message a reply"
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
                                    "description": "Attachment objects with filename and description. See [Uploading Files](#DOCS_REFERENCE/uploading-files)",
                                    "items": {
                                        "$ref": "#/components/schemas/Attachment"
                                    }
                                },
                                "flags": {
                                    "type": "integer",
                                    "description": "[Message flags](#DOCS_RESOURCES_CHANNEL/message-object-message-flags) combined as a [bitfield](https://en.wikipedia.org/wiki/Bit_field) (only `SUPPRESS_EMBEDS` and `SUPPRESS_NOTIFICATIONS` can be set)"
                                }
                            }
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/channels/{channel_id}/messages/{message_id}": {
        "get": {
            "operationId": "getChannelsMessage",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Message"
                            }
                        }
                    },
                    "description": "Retrieves a specific message in the channel. Returns a message object on success.\r"
                }
            }
        },
        "patch": {
            "operationId": "patchChannelsMessage",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Message"
                            }
                        }
                    },
                    "description": "Edit a previously sent message. The fields `content`, `embeds`, and `flags` can be edited by the original message author. Other users can only edit `flags` and only if they have the `MANAGE_MESSAGES` permission in the corresponding channel. When specifying flags, ensure to include all previously set flags/bits in addition to ones that you are modifying. Only `flags` documented in the table below may be modified by users (unsupported flag changes are currently ignored without error).\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
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
                                "flags": {
                                    "type": "integer",
                                    "description": "Edit the [flags](#DOCS_RESOURCES_CHANNEL/message-object-message-flags) of a message (only `SUPPRESS_EMBEDS` can currently be set/unset)"
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
                                "payload_json": {
                                    "type": "string",
                                    "description": "JSON-encoded body of non-file params (multipart/form-data only). See [Uploading Files](#DOCS_REFERENCE/uploading-files)"
                                },
                                "attachments": {
                                    "type": "array",
                                    "description": "Attached files to keep and possible descriptions for new files. See [Uploading Files](#DOCS_REFERENCE/uploading-files)",
                                    "items": {
                                        "$ref": "#/components/schemas/Attachment"
                                    }
                                }
                            },
                            "required": [
                                "content",
                                "embeds",
                                "flags",
                                "allowed_mentions",
                                "components",
                                "files",
                                "payload_json",
                                "attachments"
                            ]
                        }
                    }
                },
                "required": true
            }
        },
        "delete": {
            "operationId": "deleteChannelsMessage",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Delete a message. If operating on a guild channel and trying to delete a message that was not sent by the current user, this endpoint requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success. Fires a Message Delete Gateway event.\r"
                }
            }
        }
    },
    "/channels/{channel_id}/messages/{message_id}/crosspost": {
        "post": {
            "operationId": "postChannelsMessagesCrosspost",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Message"
                            }
                        }
                    },
                    "description": "Crosspost a message in an Announcement Channel to following channels. This endpoint requires the `SEND_MESSAGES` permission, if the current user sent the message, or additionally the `MANAGE_MESSAGES` permission, for all other messages, to be present for the current user.\r"
                }
            }
        }
    },
    "/channels/{channel_id}/messages/{message_id}/reactions/{emoji}/@me": {
        "put": {
            "operationId": "putChannelsMessagesReactionsEmojiMe",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "emoji",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Create a reaction for the message. This endpoint requires the `READ_MESSAGE_HISTORY` permission to be present on the current user. Additionally, if nobody else has reacted to the message using this emoji, this endpoint requires the `ADD_REACTIONS` permission to be present on the current user. Returns a 204 empty response on success. Fires a Message Reaction Add Gateway event.\r"
                }
            }
        },
        "delete": {
            "operationId": "deleteChannelsMessagesReactionsEmojiMe",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "emoji",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Delete a reaction the current user has made for the message. Returns a 204 empty response on success. Fires a Message Reaction Remove Gateway event.\r"
                }
            }
        }
    },
    "/channels/{channel_id}/messages/{message_id}/reactions/{emoji}/{user_id}": {
        "delete": {
            "operationId": "deleteChannelsMessagesReactionsUser",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "emoji",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "user_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Deletes another user's reaction. This endpoint requires the `MANAGE_MESSAGES` permission to be present on the current user. Returns a 204 empty response on success. Fires a Message Reaction Remove Gateway event.\r"
                }
            }
        }
    },
    "/channels/{channel_id}/messages/{message_id}/reactions/{emoji}": {
        "get": {
            "operationId": "getChannelsMessagesReactionsEmoji",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "emoji",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/User"
                                }
                            }
                        }
                    },
                    "description": "Get a list of users that reacted with this emoji. Returns an array of user objects on success.\r"
                }
            }
        },
        "delete": {
            "operationId": "deleteChannelsMessagesReactionsEmoji",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "emoji",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Deletes all the reactions for a given emoji on a message. This endpoint requires the `MANAGE_MESSAGES` permission to be present on the current user. Fires a Message Reaction Remove Emoji Gateway event.\r"
                }
            }
        }
    },
    "/channels/{channel_id}/messages/{message_id}/reactions": {
        "delete": {
            "operationId": "deleteChannelsMessagesReactions",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Deletes all reactions on a message. This endpoint requires the `MANAGE_MESSAGES` permission to be present on the current user. Fires a Message Reaction Remove All Gateway event."
                }
            }
        }
    },
    "/channels/{channel_id}/messages/bulk-delete": {
        "post": {
            "operationId": "postChannelsMessagesBulkDelete",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Delete multiple messages in a single request. This endpoint can only be used on guild channels and requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success. Fires a Message Delete Bulk Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "messages": {
                                    "type": "array",
                                    "description": "an array of message ids to delete (2-100)",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            },
                            "required": [
                                "messages"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/channels/{channel_id}/permissions/{overwrite_id}": {
        "put": {
            "operationId": "putChannelsPermission",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "overwrite_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Edit the channel permission overwrites for a user or role in a channel. Only usable for guild channels. Requires the `MANAGE_ROLES` permission. Only permissions your bot has in the guild or parent channel (if applicable) can be allowed/denied (unless your bot has a `MANAGE_ROLES` overwrite in the channel). Returns a 204 empty response on success. Fires a Channel Update Gateway event. For more information about permissions, see permissions.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "allow": {
                                    "type": "string",
                                    "description": "the bitwise value of all allowed permissions (default `\"0\"`)"
                                },
                                "deny": {
                                    "type": "string",
                                    "description": "the bitwise value of all disallowed permissions (default `\"0\"`)"
                                },
                                "type": {
                                    "type": "integer",
                                    "description": "0 for a role or 1 for a member"
                                }
                            },
                            "required": [
                                "type"
                            ]
                        }
                    }
                },
                "required": true
            }
        },
        "delete": {
            "operationId": "deleteChannelsPermission",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "overwrite_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Delete a channel permission overwrite for a user or role in a channel. Only usable for guild channels. Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success. Fires a Channel Update Gateway event. For more information about permissions, see permissions\r"
                }
            }
        }
    },
    "/channels/{channel_id}/invites": {
        "get": {
            "operationId": "getChannelsInvites",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/Invite"
                                }
                            }
                        }
                    },
                    "description": "Returns a list of invite objects (with invite metadata) for the channel. Only usable for guild channels. Requires the `MANAGE_CHANNELS` permission."
                }
            }
        },
        "post": {
            "operationId": "postChannelsInvites",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Invite"
                            }
                        }
                    },
                    "description": "Create a new invite object for the channel. Only usable for guild channels. Requires the `CREATE_INSTANT_INVITE` permission. All JSON parameters for this route are optional, however the request body is not. If you are not sending any fields, you still have to send an empty JSON object (`{}`). Returns an invite object. Fires an Invite Create Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "max_age": {
                                    "type": "integer",
                                    "description": "duration of invite in seconds before expiry, or 0 for never. between 0 and 604800 (7 days)"
                                },
                                "max_uses": {
                                    "type": "integer",
                                    "description": "max number of uses or 0 for unlimited. between 0 and 100"
                                },
                                "temporary": {
                                    "type": "boolean",
                                    "description": "whether this invite only grants temporary membership"
                                },
                                "unique": {
                                    "type": "boolean",
                                    "description": "if true, don't try to reuse a similar invite (useful for creating many unique one time use invites)"
                                },
                                "target_type": {
                                    "type": "integer",
                                    "description": "the [type of target](#DOCS_RESOURCES_INVITE/invite-object-invite-target-types) for this voice channel invite"
                                },
                                "target_user_id": {
                                    "type": "string",
                                    "description": "the id of the user whose stream to display for this invite, required if `target_type` is 1, the user must be streaming in the channel"
                                },
                                "target_application_id": {
                                    "type": "string",
                                    "description": "the id of the embedded application to open for this invite, required if `target_type` is 2, the application must have the `EMBEDDED` flag"
                                }
                            },
                            "required": [
                                "max_age",
                                "max_uses",
                                "temporary",
                                "unique",
                                "target_type",
                                "target_user_id",
                                "target_application_id"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/channels/{channel_id}/followers": {
        "post": {
            "operationId": "postChannelsFollowers",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/FollowedChannel"
                            }
                        }
                    },
                    "description": "OK"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "webhook_channel_id": {
                                    "type": "string",
                                    "description": "id of target channel"
                                }
                            },
                            "required": [
                                "webhook_channel_id"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/channels/{channel_id}/typing": {
        "post": {
            "operationId": "postChannelsTyping",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Post a typing indicator for the specified channel. Generally bots should **not** implement this route. However, if a bot is responding to a command and expects the computation to take a few seconds, this endpoint may be called to let the user know that the bot is processing their message. Returns a 204 empty response on success. Fires a Typing Start Gateway event."
                }
            }
        }
    },
    "/channels/{channel_id}/pins": {
        "get": {
            "operationId": "getChannelsPins",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/Message"
                                }
                            }
                        }
                    },
                    "description": "Returns all pinned messages in the channel as an array of message objects."
                }
            }
        }
    },
    "/channels/{channel_id}/pins/{message_id}": {
        "put": {
            "operationId": "putChannelsPin",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Pin a message in a channel. Requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success. Fires a Channel Pins Update Gateway event.\r"
                }
            }
        },
        "delete": {
            "operationId": "deleteChannelsPin",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "OK"
                }
            }
        }
    },
    "/channels/{channel_id}/recipients/{user_id}": {
        "put": {
            "operationId": "putChannelsRecipient",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "user_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Adds a recipient to a Group DM using their access token.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "access_token": {
                                    "type": "string",
                                    "description": "access token of a user that has granted your app the `gdm.join` scope"
                                },
                                "nick": {
                                    "type": "string",
                                    "description": "nickname of the user being added"
                                }
                            },
                            "required": [
                                "access_token",
                                "nick"
                            ]
                        }
                    }
                },
                "required": true
            }
        },
        "delete": {
            "operationId": "deleteChannelsRecipient",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "user_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Removes a recipient from a Group DM."
                }
            }
        }
    },
    "/channels/{channel_id}/messages/{message_id}/threads": {
        "post": {
            "operationId": "postChannelsMessagesThreads",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Channel"
                            }
                        }
                    },
                    "description": "Creates a new thread from an existing message. Returns a channel on success, and a 400 BAD REQUEST on invalid parameters. Fires a Thread Create and a Message Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "1-100 character channel name"
                                },
                                "auto_archive_duration": {
                                    "type": "integer",
                                    "description": "the thread will stop showing in the channel list after `auto_archive_duration` minutes of inactivity, can be set to: 60, 1440, 4320, 10080"
                                },
                                "rate_limit_per_user": {
                                    "type": "integer",
                                    "description": "amount of seconds a user has to wait before sending another message (0-21600)"
                                }
                            },
                            "required": [
                                "name"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/channels/{channel_id}/threads": {
        "post": {
            "operationId": "postChannelsThreads",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Channel"
                            }
                        }
                    },
                    "description": "Creates a new thread in a forum channel, and sends a message within the created thread. Returns a channel, with a nested message object, on success, and a 400 BAD REQUEST on invalid parameters. Fires a Thread Create and Message Create Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "1-100 character channel name"
                                },
                                "auto_archive_duration": {
                                    "type": "integer",
                                    "description": "duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080"
                                },
                                "rate_limit_per_user": {
                                    "type": "integer",
                                    "description": "amount of seconds a user has to wait before sending another message (0-21600)"
                                },
                                "message": {
                                    "$ref": "#/components/schemas/ForumThreadMessageParams",
                                    "description": "contents of the first message in the forum thread"
                                },
                                "applied_tags": {
                                    "type": "array",
                                    "description": "the IDs of the set of tags that have been applied to a thread in a `GUILD_FORUM` channel",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            },
                            "required": [
                                "name",
                                "message"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/channels/{channel_id}/thread-members/@me": {
        "put": {
            "operationId": "putChannelsThreadMembersMe",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Adds the current user to a thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update and a Thread Create Gateway event."
                }
            }
        },
        "delete": {
            "operationId": "deleteChannelsThreadMembersMe",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Removes the current user from a thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update Gateway event."
                }
            }
        }
    },
    "/channels/{channel_id}/thread-members/{user_id}": {
        "put": {
            "operationId": "putChannelsThreadMember",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "user_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Adds another member to a thread. Requires the ability to send messages in the thread. Also requires the thread is not archived. Returns a 204 empty response if the member is successfully added or was already a member of the thread. Fires a Thread Members Update Gateway event."
                }
            }
        },
        "delete": {
            "operationId": "deleteChannelsThreadMember",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "user_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Removes another member from a thread. Requires the `MANAGE_THREADS` permission, or the creator of the thread if it is a `PRIVATE_THREAD`. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update Gateway event."
                }
            }
        },
        "get": {
            "operationId": "getChannelsThreadMember",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "user_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ThreadMember"
                            }
                        }
                    },
                    "description": "Returns a thread member object for the specified user if they are a member of the thread, returns a 404 response otherwise.\r"
                }
            }
        }
    },
    "/channels/{channel_id}/thread-members": {
        "get": {
            "operationId": "getChannelsThreadMembers",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/ThreadMember"
                                }
                            }
                        }
                    },
                    "description": "Returns array of thread members objects that are members of the thread.\r"
                }
            }
        }
    },
    "/channels/{channel_id}/threads/archived/public": {
        "get": {
            "operationId": "getChannelsThreadsArchivedPublic",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Returns archived threads in the channel that are public. When called on a `GUILD_TEXT` channel, returns threads of type `PUBLIC_THREAD`. When called on a `GUILD_ANNOUNCEMENT` channel returns threads of type `ANNOUNCEMENT_THREAD`. Threads are ordered by `archive_timestamp`, in descending order. Requires the `READ_MESSAGE_HISTORY` permission.\r"
                }
            }
        }
    },
    "/channels/{channel_id}/threads/archived/private": {
        "get": {
            "operationId": "getChannelsThreadsArchivedPrivate",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Channel"
                            }
                        }
                    },
                    "description": "Returns archived threads in the channel that are of type `PRIVATE_THREAD`. Threads are ordered by `archive_timestamp`, in descending order. Requires both the `READ_MESSAGE_HISTORY` and `MANAGE_THREADS` permissions.\r"
                }
            }
        }
    },
    "/channels/{channel_id}/users/@me/threads/archived/private": {
        "get": {
            "operationId": "getChannelsUsersMeThreadsArchivedPrivate",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Channel"
                            }
                        }
                    },
                    "description": "Returns archived threads in the channel that are of type `PRIVATE_THREAD`, and the user has joined. Threads are ordered by their `id`, in descending order. Requires the `READ_MESSAGE_HISTORY` permission.\r"
                }
            }
        }
    },
    "/guilds/{guild_id}/emojis": {
        "get": {
            "operationId": "getGuildsEmojis",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/Emoji"
                                }
                            }
                        }
                    },
                    "description": "Returns a list of emoji objects for the given guild."
                }
            }
        },
        "post": {
            "operationId": "postGuildsEmojis",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Emoji"
                            }
                        }
                    },
                    "description": "Create a new emoji for the guild. Requires the `MANAGE_GUILD_EXPRESSIONS` permission. Returns the new emoji object on success. Fires a Guild Emojis Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "name of the emoji"
                                },
                                "image": {
                                    "type": "object",
                                    "description": "the 128x128 emoji image"
                                },
                                "roles": {
                                    "type": "array",
                                    "description": "roles allowed to use this emoji",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            },
                            "required": [
                                "name",
                                "image",
                                "roles"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/guilds/{guild_id}/emojis/{emoji_id}": {
        "get": {
            "operationId": "getGuildsEmoji",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "emoji_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Emoji"
                            }
                        }
                    },
                    "description": "Returns an emoji object for the given guild and emoji IDs."
                }
            }
        },
        "patch": {
            "operationId": "patchGuildsEmoji",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "emoji_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Emoji"
                            }
                        }
                    },
                    "description": "Modify the given emoji. Requires the `MANAGE_GUILD_EXPRESSIONS` permission. Returns the updated emoji object on success. Fires a Guild Emojis Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "name of the emoji"
                                },
                                "roles": {
                                    "type": "array",
                                    "description": "roles allowed to use this emoji",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            },
                            "required": [
                                "name",
                                "roles"
                            ]
                        }
                    }
                },
                "required": true
            }
        },
        "delete": {
            "operationId": "deleteGuildsEmoji",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "emoji_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Delete the given emoji. Requires the `MANAGE_GUILD_EXPRESSIONS` permission. Returns `204 No Content` on success. Fires a Guild Emojis Update Gateway event.\r"
                }
            }
        }
    },
    "/guilds": {
        "post": {
            "operationId": "postGuilds",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Guild"
                            }
                        }
                    },
                    "description": "Create a new guild. Returns a guild object on success. Fires a Guild Create Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "name of the guild (2-100 characters)"
                                },
                                "region": {
                                    "type": "string",
                                    "description": "[voice region](#DOCS_RESOURCES_VOICE/voice-region-object) id (deprecated)"
                                },
                                "icon": {
                                    "type": "object",
                                    "description": "base64 128x128 image for the guild icon"
                                },
                                "verification_level": {
                                    "type": "integer",
                                    "description": "[verification level](#DOCS_RESOURCES_GUILD/guild-object-verification-level)"
                                },
                                "default_message_notifications": {
                                    "type": "integer",
                                    "description": "default [message notification level](#DOCS_RESOURCES_GUILD/guild-object-default-message-notification-level)"
                                },
                                "explicit_content_filter": {
                                    "type": "integer",
                                    "description": "[explicit content filter level](#DOCS_RESOURCES_GUILD/guild-object-explicit-content-filter-level)"
                                },
                                "roles": {
                                    "type": "array",
                                    "description": "new guild roles",
                                    "items": {
                                        "$ref": "#/components/schemas/Role"
                                    }
                                },
                                "channels": {
                                    "type": "array",
                                    "description": "new guild's channels",
                                    "items": {
                                        "$ref": "#/components/schemas/Channel"
                                    }
                                },
                                "afk_channel_id": {
                                    "type": "string",
                                    "description": "id for afk channel"
                                },
                                "afk_timeout": {
                                    "type": "integer",
                                    "description": "afk timeout in seconds, can be set to: 60, 300, 900, 1800, 3600"
                                },
                                "system_channel_id": {
                                    "type": "string",
                                    "description": "the id of the channel where guild notices such as welcome messages and boost events are posted"
                                },
                                "system_channel_flags": {
                                    "type": "integer",
                                    "description": "[system channel flags](#DOCS_RESOURCES_GUILD/guild-object-system-channel-flags)"
                                }
                            },
                            "required": [
                                "name"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/guilds/{guild_id}": {
        "get": {
            "operationId": "getGuild",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Guild"
                            }
                        }
                    },
                    "description": "Returns the guild object for the given id. If `with_counts` is set to `true`, this endpoint will also return `approximate_member_count` and `approximate_presence_count` for the guild.\r"
                }
            }
        },
        "patch": {
            "operationId": "patchGuild",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Guild"
                            }
                        }
                    },
                    "description": "Modify a guild's settings. Requires the `MANAGE_GUILD` permission. Returns the updated guild object on success. Fires a Guild Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "guild name"
                                },
                                "region": {
                                    "type": "string",
                                    "description": "guild [voice region](#DOCS_RESOURCES_VOICE/voice-region-object) id (deprecated)"
                                },
                                "verification_level": {
                                    "type": "integer",
                                    "description": "[verification level](#DOCS_RESOURCES_GUILD/guild-object-verification-level)"
                                },
                                "default_message_notifications": {
                                    "type": "integer",
                                    "description": "default [message notification level](#DOCS_RESOURCES_GUILD/guild-object-default-message-notification-level)"
                                },
                                "explicit_content_filter": {
                                    "type": "integer",
                                    "description": "[explicit content filter level](#DOCS_RESOURCES_GUILD/guild-object-explicit-content-filter-level)"
                                },
                                "afk_channel_id": {
                                    "type": "string",
                                    "description": "id for afk channel"
                                },
                                "afk_timeout": {
                                    "type": "integer",
                                    "description": "afk timeout in seconds, can be set to: 60, 300, 900, 1800, 3600"
                                },
                                "icon": {
                                    "type": "object",
                                    "description": "base64 1024x1024 png/jpeg/gif image for the guild icon (can be animated gif when the server has the `ANIMATED_ICON` feature)"
                                },
                                "owner_id": {
                                    "type": "string",
                                    "description": "user id to transfer guild ownership to (must be owner)"
                                },
                                "splash": {
                                    "type": "object",
                                    "description": "base64 16:9 png/jpeg image for the guild splash (when the server has the `INVITE_SPLASH` feature)"
                                },
                                "discovery_splash": {
                                    "type": "object",
                                    "description": "base64 16:9 png/jpeg image for the guild discovery splash (when the server has the `DISCOVERABLE` feature)"
                                },
                                "banner": {
                                    "type": "object",
                                    "description": "base64 16:9 png/jpeg image for the guild banner (when the server has the `BANNER` feature; can be animated gif when the server has the `ANIMATED_BANNER` feature)"
                                },
                                "system_channel_id": {
                                    "type": "string",
                                    "description": "the id of the channel where guild notices such as welcome messages and boost events are posted"
                                },
                                "system_channel_flags": {
                                    "type": "integer",
                                    "description": "[system channel flags](#DOCS_RESOURCES_GUILD/guild-object-system-channel-flags)"
                                },
                                "rules_channel_id": {
                                    "type": "string",
                                    "description": "the id of the channel where Community guilds display rules and/or guidelines"
                                },
                                "public_updates_channel_id": {
                                    "type": "string",
                                    "description": "the id of the channel where admins and moderators of Community guilds receive notices from Discord"
                                },
                                "preferred_locale": {
                                    "type": "string",
                                    "description": "the preferred [locale](#DOCS_REFERENCE/locales) of a Community guild used in server discovery and notices from Discord; defaults to \"en-US\""
                                },
                                "features": {
                                    "type": "array",
                                    "description": "enabled guild features",
                                    "items": {
                                        "type": "object"
                                    }
                                },
                                "description": {
                                    "type": "string",
                                    "description": "the description for the guild"
                                },
                                "premium_progress_bar_enabled": {
                                    "type": "boolean",
                                    "description": "whether the guild's boost progress bar should be enabled"
                                },
                                "safety_alerts_channel_id": {
                                    "type": "string",
                                    "description": "the id of the channel where admins and moderators of Community guilds receive safety alerts from Discord"
                                }
                            },
                            "required": [
                                "name",
                                "region",
                                "verification_level",
                                "default_message_notifications",
                                "explicit_content_filter",
                                "afk_channel_id",
                                "afk_timeout",
                                "icon",
                                "owner_id",
                                "splash",
                                "discovery_splash",
                                "banner",
                                "system_channel_id",
                                "system_channel_flags",
                                "rules_channel_id",
                                "public_updates_channel_id",
                                "preferred_locale",
                                "features",
                                "description",
                                "premium_progress_bar_enabled",
                                "safety_alerts_channel_id"
                            ]
                        }
                    }
                },
                "required": true
            }
        },
        "delete": {
            "operationId": "deleteGuild",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Delete a guild permanently. User must be owner. Returns `204 No Content` on success. Fires a Guild Delete Gateway event."
                }
            }
        }
    },
    "/guilds/{guild_id}/preview": {
        "get": {
            "operationId": "getGuildsPreview",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildPreview"
                            }
                        }
                    },
                    "description": "Returns the guild preview object for the given id. If the user is not in the guild, then the guild must be lurkable."
                }
            }
        }
    },
    "/guilds/{guild_id}/channels": {
        "get": {
            "operationId": "getGuildsChannels",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/Channel"
                                }
                            }
                        }
                    },
                    "description": "Returns a list of guild channel objects. Does not include threads."
                }
            }
        },
        "post": {
            "operationId": "postGuildsChannels",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Channel"
                            }
                        }
                    },
                    "description": "Create a new channel object for the guild. Requires the `MANAGE_CHANNELS` permission. If setting permission overwrites, only permissions your bot has in the guild can be allowed/denied. Setting `MANAGE_ROLES` permission in channels is only possible for guild administrators. Returns the new channel object on success. Fires a Channel Create Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "channel name (1-100 characters)"
                                },
                                "type": {
                                    "type": "integer",
                                    "description": "the [type of channel](#DOCS_RESOURCES_CHANNEL/channel-object-channel-types)"
                                },
                                "topic": {
                                    "type": "string",
                                    "description": "channel topic (0-1024 characters)"
                                },
                                "bitrate": {
                                    "type": "integer",
                                    "description": "the bitrate (in bits) of the voice or stage channel; min 8000"
                                },
                                "user_limit": {
                                    "type": "integer",
                                    "description": "the user limit of the voice channel"
                                },
                                "rate_limit_per_user": {
                                    "type": "integer",
                                    "description": "amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `manage_messages` or `manage_channel`, are unaffected"
                                },
                                "position": {
                                    "type": "integer",
                                    "description": "sorting position of the channel"
                                },
                                "permission_overwrites": {
                                    "type": "array",
                                    "description": "the channel's permission overwrites",
                                    "items": {
                                        "$ref": "#/components/schemas/Overwrite"
                                    }
                                },
                                "parent_id": {
                                    "type": "string",
                                    "description": "id of the parent category for a channel"
                                },
                                "nsfw": {
                                    "type": "boolean",
                                    "description": "whether the channel is nsfw"
                                },
                                "rtc_region": {
                                    "type": "string",
                                    "description": "channel [voice region](#DOCS_RESOURCES_VOICE/voice-region-object) id of the voice or stage channel, automatic when set to null"
                                },
                                "video_quality_mode": {
                                    "type": "integer",
                                    "description": "the camera [video quality mode](#DOCS_RESOURCES_CHANNEL/channel-object-video-quality-modes) of the voice channel"
                                },
                                "default_auto_archive_duration": {
                                    "type": "integer",
                                    "description": "the default duration that the clients use (not the API) for newly created threads in the channel, in minutes, to automatically archive the thread after recent activity"
                                },
                                "default_reaction_emoji": {
                                    "$ref": "#/components/schemas/DefaultReaction",
                                    "description": "emoji to show in the add reaction button on a thread in a `GUILD_FORUM` channel"
                                },
                                "available_tags": {
                                    "type": "array",
                                    "description": "set of tags that can be used in a `GUILD_FORUM` channel",
                                    "items": {
                                        "$ref": "#/components/schemas/ForumTag"
                                    }
                                },
                                "default_sort_order": {
                                    "type": "integer",
                                    "description": "the [default sort order type](#DOCS_RESOURCES_CHANNEL/channel-object-sort-order-types) used to order posts in `GUILD_FORUM` channels"
                                }
                            },
                            "required": [
                                "name",
                                "type",
                                "topic",
                                "bitrate",
                                "user_limit",
                                "rate_limit_per_user",
                                "position",
                                "permission_overwrites",
                                "parent_id",
                                "nsfw",
                                "rtc_region",
                                "video_quality_mode",
                                "default_auto_archive_duration",
                                "default_reaction_emoji",
                                "available_tags",
                                "default_sort_order"
                            ]
                        }
                    }
                },
                "required": true
            }
        },
        "patch": {
            "operationId": "patchGuildsChannels",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Modify the positions of a set of channel objects for the guild. Requires `MANAGE_CHANNELS` permission. Returns a 204 empty response on success. Fires multiple Channel Update Gateway events.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "string",
                                    "description": "channel id"
                                },
                                "position": {
                                    "type": "integer",
                                    "description": "sorting position of the channel"
                                },
                                "lock_permissions": {
                                    "type": "boolean",
                                    "description": "syncs the permission overwrites with the new parent, if moving to a new category"
                                },
                                "parent_id": {
                                    "type": "string",
                                    "description": "the new parent ID for the channel that is moved"
                                }
                            },
                            "required": [
                                "id",
                                "position",
                                "lock_permissions",
                                "parent_id"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/guilds/{guild_id}/threads/active": {
        "get": {
            "operationId": "getGuildsThreadsActive",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Returns all active threads in the guild, including public and private threads. Threads are ordered by their `id`, in descending order.\r"
                }
            }
        }
    },
    "/guilds/{guild_id}/members/{user_id}": {
        "get": {
            "operationId": "getGuildsMember",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "user_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildMember"
                            }
                        }
                    },
                    "description": "Returns a guild member object for the specified user."
                }
            }
        },
        "put": {
            "operationId": "putGuildsMember",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "user_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildMember"
                            }
                        }
                    },
                    "description": "Adds a user to the guild, provided you have a valid oauth2 access token for the user with the `guilds.join` scope. Returns a 201 Created with the guild member as the body, or 204 No Content if the user is already a member of the guild. Fires a Guild Member Add Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "access_token": {
                                    "type": "string",
                                    "description": "an oauth2 access token granted with the `guilds.join` to the bot's application for the user you want to add to the guild"
                                },
                                "nick": {
                                    "type": "string",
                                    "description": "value to set user's nickname to"
                                },
                                "roles": {
                                    "type": "array",
                                    "description": "array of role ids the member is assigned",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "mute": {
                                    "type": "boolean",
                                    "description": "whether the user is muted in voice channels"
                                },
                                "deaf": {
                                    "type": "boolean",
                                    "description": "whether the user is deafened in voice channels"
                                }
                            },
                            "required": [
                                "access_token",
                                "nick",
                                "roles",
                                "mute",
                                "deaf"
                            ]
                        }
                    }
                },
                "required": true
            }
        },
        "patch": {
            "operationId": "patchGuildsMember",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "user_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildMember"
                            }
                        }
                    },
                    "description": "Modify attributes of a guild member. Returns a 200 OK with the guild member as the body. Fires a Guild Member Update Gateway event. If the `channel_id` is set to null, this will force the target user to be disconnected from voice.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "nick": {
                                    "type": "string",
                                    "description": "value to set user's nickname to"
                                },
                                "roles": {
                                    "type": "array",
                                    "description": "array of role ids the member is assigned",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "mute": {
                                    "type": "boolean",
                                    "description": "whether the user is muted in voice channels. Will throw a 400 error if the user is not in a voice channel"
                                },
                                "deaf": {
                                    "type": "boolean",
                                    "description": "whether the user is deafened in voice channels. Will throw a 400 error if the user is not in a voice channel"
                                },
                                "channel_id": {
                                    "type": "string",
                                    "description": "id of channel to move user to (if they are connected to voice)"
                                },
                                "communication_disabled_until": {
                                    "type": "string",
                                    "description": "when the user's [timeout](https://support.discord.com/hc/en-us/articles/4413305239191-Time-Out-FAQ) will expire and the user will be able to communicate in the guild again (up to 28 days in the future), set to null to remove timeout. Will throw a 403 error if the user has the ADMINISTRATOR permission or is the owner of the guild",
                                    "format": "date-time"
                                },
                                "flags": {
                                    "type": "integer",
                                    "description": "[guild member flags](#DOCS_RESOURCES_GUILD/guild-member-object-guild-member-flags)"
                                }
                            },
                            "required": [
                                "nick",
                                "roles",
                                "mute",
                                "deaf",
                                "channel_id",
                                "communication_disabled_until",
                                "flags"
                            ]
                        }
                    }
                },
                "required": true
            }
        },
        "delete": {
            "operationId": "deleteGuildsMember",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "user_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Remove a member from a guild. Requires `KICK_MEMBERS` permission. Returns a 204 empty response on success. Fires a Guild Member Remove Gateway event.\r"
                }
            }
        }
    },
    "/guilds/{guild_id}/members": {
        "get": {
            "operationId": "getGuildsMembers",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/GuildMember"
                                }
                            }
                        }
                    },
                    "description": "Returns a list of guild member objects that are members of the guild.\r"
                }
            }
        }
    },
    "/guilds/{guild_id}/members/search": {
        "get": {
            "operationId": "getGuildsMembersSearch",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/GuildMember"
                                }
                            }
                        }
                    },
                    "description": "Returns a list of guild member objects whose username or nickname starts with a provided string.\r"
                }
            }
        }
    },
    "/guilds/{guild_id}/members/@me": {
        "patch": {
            "operationId": "patchGuildsMembersMe",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Modifies the current member in a guild. Returns a 200 with the updated member object on success. Fires a Guild Member Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "nick": {
                                    "type": "string",
                                    "description": "value to set user's nickname to"
                                }
                            }
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/guilds/{guild_id}/members/@me/nick": {
        "patch": {
            "operationId": "patchGuildsMembersMeNick",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Modifies the nickname of the current user in a guild. Returns a 200 with the nickname on success. Fires a Guild Member Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "nick": {
                                    "type": "string",
                                    "description": "value to set user's nickname to"
                                }
                            }
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/guilds/{guild_id}/members/{user_id}/roles/{role_id}": {
        "put": {
            "operationId": "putGuildsMembersRole",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "user_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "role_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Adds a role to a guild member. Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success. Fires a Guild Member Update Gateway event.\r"
                }
            }
        },
        "delete": {
            "operationId": "deleteGuildsMembersRole",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "user_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "role_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Removes a role from a guild member. Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success. Fires a Guild Member Update Gateway event.\r"
                }
            }
        }
    },
    "/guilds/{guild_id}/bans": {
        "get": {
            "operationId": "getGuildsBans",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/Ban"
                                }
                            }
                        }
                    },
                    "description": "Returns a list of ban objects for the users banned from this guild. Requires the `BAN_MEMBERS` permission.\r"
                }
            }
        }
    },
    "/guilds/{guild_id}/bans/{user_id}": {
        "get": {
            "operationId": "getGuildsBan",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "user_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Ban"
                            }
                        }
                    },
                    "description": "Returns a ban object for the given user or a 404 not found if the ban cannot be found. Requires the `BAN_MEMBERS` permission."
                }
            }
        },
        "put": {
            "operationId": "putGuildsBan",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "user_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Create a guild ban, and optionally delete previous messages sent by the banned user. Requires the `BAN_MEMBERS` permission. Returns a 204 empty response on success. Fires a Guild Ban Add Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "delete_message_days": {
                                    "type": "integer",
                                    "description": "number of days to delete messages for (0-7) (deprecated)"
                                },
                                "delete_message_seconds": {
                                    "type": "integer",
                                    "description": "number of seconds to delete messages for, between 0 and 604800 (7 days)"
                                }
                            }
                        }
                    }
                },
                "required": true
            }
        },
        "delete": {
            "operationId": "deleteGuildsBan",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "user_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Remove the ban for a user. Requires the `BAN_MEMBERS` permissions. Returns a 204 empty response on success. Fires a Guild Ban Remove Gateway event.\r"
                }
            }
        }
    },
    "/guilds/{guild_id}/roles": {
        "get": {
            "operationId": "getGuildsRoles",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/Role"
                                }
                            }
                        }
                    },
                    "description": "Returns a list of role objects for the guild."
                }
            }
        },
        "post": {
            "operationId": "postGuildsRoles",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Role"
                            }
                        }
                    },
                    "description": "Create a new role for the guild. Requires the `MANAGE_ROLES` permission. Returns the new role object on success. Fires a Guild Role Create Gateway event. All JSON params are optional.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "name of the role, max 100 characters"
                                },
                                "permissions": {
                                    "type": "string",
                                    "description": "bitwise value of the enabled/disabled permissions"
                                },
                                "color": {
                                    "type": "integer",
                                    "description": "RGB color value"
                                },
                                "hoist": {
                                    "type": "boolean",
                                    "description": "whether the role should be displayed separately in the sidebar"
                                },
                                "icon": {
                                    "type": "object",
                                    "description": "the role's icon image (if the guild has the `ROLE_ICONS` feature)"
                                },
                                "unicode_emoji": {
                                    "type": "string",
                                    "description": "the role's unicode emoji as a [standard emoji](#DOCS_REFERENCE/message-formatting) (if the guild has the `ROLE_ICONS` feature)"
                                },
                                "mentionable": {
                                    "type": "boolean",
                                    "description": "whether the role should be mentionable"
                                }
                            },
                            "required": [
                                "name",
                                "permissions",
                                "color",
                                "hoist",
                                "icon",
                                "unicode_emoji",
                                "mentionable"
                            ]
                        }
                    }
                },
                "required": true
            }
        },
        "patch": {
            "operationId": "patchGuildsRoles",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Modify the positions of a set of role objects for the guild. Requires the `MANAGE_ROLES` permission. Returns a list of all of the guild's role objects on success. Fires multiple Guild Role Update Gateway events.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "string",
                                    "description": "role"
                                },
                                "position": {
                                    "type": "integer",
                                    "description": "sorting position of the role"
                                }
                            },
                            "required": [
                                "id"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/guilds/{guild_id}/roles/{role_id}": {
        "patch": {
            "operationId": "patchGuildsRole",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "role_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Role"
                            }
                        }
                    },
                    "description": "Modify a guild role. Requires the `MANAGE_ROLES` permission. Returns the updated role on success. Fires a Guild Role Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "name of the role, max 100 characters"
                                },
                                "permissions": {
                                    "type": "string",
                                    "description": "bitwise value of the enabled/disabled permissions"
                                },
                                "color": {
                                    "type": "integer",
                                    "description": "RGB color value"
                                },
                                "hoist": {
                                    "type": "boolean",
                                    "description": "whether the role should be displayed separately in the sidebar"
                                },
                                "icon": {
                                    "type": "object",
                                    "description": "the role's icon image (if the guild has the `ROLE_ICONS` feature)"
                                },
                                "unicode_emoji": {
                                    "type": "string",
                                    "description": "the role's unicode emoji as a [standard emoji](#DOCS_REFERENCE/message-formatting) (if the guild has the `ROLE_ICONS` feature)"
                                },
                                "mentionable": {
                                    "type": "boolean",
                                    "description": "whether the role should be mentionable"
                                }
                            },
                            "required": [
                                "name",
                                "permissions",
                                "color",
                                "hoist",
                                "icon",
                                "unicode_emoji",
                                "mentionable"
                            ]
                        }
                    }
                },
                "required": true
            }
        },
        "delete": {
            "operationId": "deleteGuildsRole",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "role_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Delete a guild role. Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success. Fires a Guild Role Delete Gateway event.\r"
                }
            }
        }
    },
    "/guilds/{guild_id}/mfa": {
        "post": {
            "operationId": "postGuildsMfa",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "level": {
                                        "type": "integer"
                                    }
                                }
                            }
                        }
                    },
                    "description": "Modify a guild's MFA level. Requires guild ownership. Returns the updated level on success. Fires a Guild Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "level": {
                                    "type": "integer",
                                    "description": "[MFA level](#DOCS_RESOURCES_GUILD/guild-object-mfa-level)"
                                }
                            },
                            "required": [
                                "level"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/guilds/{guild_id}/prune": {
        "get": {
            "operationId": "getGuildsPrune",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Returns an object with one `pruned` key indicating the number of members that would be removed in a prune operation. Requires the `KICK_MEMBERS` permission.\r"
                }
            }
        },
        "post": {
            "operationId": "postGuildsPrune",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Begin a prune operation. Requires the `KICK_MEMBERS` permission. Returns an object with one `pruned` key indicating the number of members that were removed in the prune operation. For large guilds it's recommended to set the `compute_prune_count` option to `false`, forcing `pruned` to `null`. Fires multiple Guild Member Remove Gateway events.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "days": {
                                    "type": "integer",
                                    "description": "number of days to prune (1-30)"
                                },
                                "compute_prune_count": {
                                    "type": "boolean",
                                    "description": "whether `pruned` is returned, discouraged for large guilds"
                                },
                                "include_roles": {
                                    "type": "array",
                                    "description": "role(s) to include",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "reason": {
                                    "type": "string",
                                    "description": "reason for the prune (deprecated)"
                                }
                            },
                            "required": [
                                "days",
                                "compute_prune_count",
                                "include_roles"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/guilds/{guild_id}/regions": {
        "get": {
            "operationId": "getGuildsRegions",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/VoiceRegion"
                                }
                            }
                        }
                    },
                    "description": "Returns a list of voice region objects for the guild. Unlike the similar `/voice` route, this returns VIP servers when the guild is VIP-enabled."
                }
            }
        }
    },
    "/guilds/{guild_id}/invites": {
        "get": {
            "operationId": "getGuildsInvites",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/Invite"
                                }
                            }
                        }
                    },
                    "description": "Returns a list of invite objects (with invite metadata) for the guild. Requires the `MANAGE_GUILD` permission."
                }
            }
        }
    },
    "/guilds/{guild_id}/integrations": {
        "get": {
            "operationId": "getGuildsIntegrations",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/Integration"
                                }
                            }
                        }
                    },
                    "description": "Returns a list of integration objects for the guild. Requires the `MANAGE_GUILD` permission.\r"
                }
            }
        }
    },
    "/guilds/{guild_id}/integrations/{integration_id}": {
        "delete": {
            "operationId": "deleteGuildsIntegration",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "integration_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Delete the attached integration object for the guild. Deletes any associated webhooks and kicks the associated bot if there is one. Requires the `MANAGE_GUILD` permission. Returns a 204 empty response on success. Fires Guild Integrations Update and Integration Delete Gateway events.\r"
                }
            }
        }
    },
    "/guilds/{guild_id}/widget": {
        "get": {
            "operationId": "getGuildsWidget",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildWidgetSettings"
                            }
                        }
                    },
                    "description": "Returns a guild widget settings object. Requires the `MANAGE_GUILD` permission."
                }
            }
        },
        "patch": {
            "operationId": "patchGuildsWidget",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildWidgetSettings"
                            }
                        }
                    },
                    "description": "Modify a guild widget settings object for the guild. All attributes may be passed in with JSON and modified. Requires the `MANAGE_GUILD` permission. Returns the updated guild widget object.\r"
                }
            }
        }
    },
    "/guilds/{guild_id}/widget.json": {
        "get": {
            "operationId": "getGuildsWidgetJson",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildWidget"
                            }
                        }
                    },
                    "description": "Returns the widget for the guild."
                }
            }
        }
    },
    "/guilds/{guild_id}/vanity-url": {
        "get": {
            "operationId": "getGuildsVanityUrl",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Invite"
                            }
                        }
                    },
                    "description": "Returns a partial invite object for guilds with that feature enabled. Requires the `MANAGE_GUILD` permission. `code` will be null if a vanity url for the guild is not set.\r"
                }
            }
        }
    },
    "/guilds/{guild_id}/widget.png": {
        "get": {
            "operationId": "getGuildsWidgetPng",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Returns a PNG image widget for the guild. Requires no permissions or authentication.\r"
                }
            }
        }
    },
    "/guilds/{guild_id}/welcome-screen": {
        "get": {
            "operationId": "getGuildsWelcomeScreen",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/WelcomeScreen"
                            }
                        }
                    },
                    "description": "Returns the Welcome Screen object for the guild. If the welcome screen is not enabled, the `MANAGE_GUILD` permission is required."
                }
            }
        },
        "patch": {
            "operationId": "patchGuildsWelcomeScreen",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/WelcomeScreen"
                            }
                        }
                    },
                    "description": "Modify the guild's Welcome Screen. Requires the `MANAGE_GUILD` permission. Returns the updated Welcome Screen object. May fire a Guild Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "enabled": {
                                    "type": "boolean",
                                    "description": "whether the welcome screen is enabled"
                                },
                                "welcome_channels": {
                                    "type": "array",
                                    "description": "channels linked in the welcome screen and their display options",
                                    "items": {
                                        "type": "object"
                                    }
                                },
                                "description": {
                                    "type": "string",
                                    "description": "the server description to show in the welcome screen"
                                }
                            },
                            "required": [
                                "enabled",
                                "welcome_channels",
                                "description"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/guilds/{guild_id}/onboarding": {
        "get": {
            "operationId": "getGuildsOnboarding",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildOnboarding"
                            }
                        }
                    },
                    "description": "Returns the Onboarding object for the guild."
                }
            }
        }
    },
    "/guilds/{guild_id}/voice-states/@me": {
        "patch": {
            "operationId": "patchGuildsVoiceStatesMe",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Updates the current user's voice state. Returns `204 No Content` on success. Fires a Voice State Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "channel_id": {
                                    "type": "string",
                                    "description": "the id of the channel the user is currently in"
                                },
                                "suppress": {
                                    "type": "boolean",
                                    "description": "toggles the user's suppress state"
                                },
                                "request_to_speak_timestamp": {
                                    "type": "string",
                                    "description": "sets the user's request to speak",
                                    "format": "date-time"
                                }
                            }
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/guilds/{guild_id}/voice-states/{user_id}": {
        "patch": {
            "operationId": "patchGuildsVoiceState",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "user_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Updates another user's voice state. Fires a Voice State Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "channel_id": {
                                    "type": "string",
                                    "description": "the id of the channel the user is currently in"
                                },
                                "suppress": {
                                    "type": "boolean",
                                    "description": "toggles the user's suppress state"
                                }
                            },
                            "required": [
                                "channel_id"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/guilds/{guild_id}/scheduled-events": {
        "get": {
            "operationId": "getGuildsScheduledEvents",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/GuildScheduledEvent"
                                }
                            }
                        }
                    },
                    "description": "Returns a list of guild scheduled event objects for the given guild.\r"
                }
            }
        },
        "post": {
            "operationId": "postGuildsScheduledEvents",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildScheduledEvent"
                            }
                        }
                    },
                    "description": "Create a guild scheduled event in the guild. Returns a guild scheduled event object on success. Fires a Guild Scheduled Event Create Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "channel_id": {
                                    "type": "string",
                                    "description": "the channel id of the scheduled event."
                                },
                                "entity_metadata": {
                                    "type": "object",
                                    "description": "the entity metadata of the scheduled event"
                                },
                                "name": {
                                    "type": "string",
                                    "description": "the name of the scheduled event"
                                },
                                "privacy_level": {
                                    "type": "object",
                                    "description": "the privacy level of the scheduled event"
                                },
                                "scheduled_start_time": {
                                    "type": "string",
                                    "description": "the time to schedule the scheduled event",
                                    "format": "date-time"
                                },
                                "scheduled_end_time": {
                                    "type": "string",
                                    "description": "the time when the scheduled event is scheduled to end",
                                    "format": "date-time"
                                },
                                "description": {
                                    "type": "string",
                                    "description": "the description of the scheduled event"
                                },
                                "entity_type": {
                                    "type": "object",
                                    "description": "the entity type of the scheduled event"
                                },
                                "image": {
                                    "type": "object",
                                    "description": "the cover image of the scheduled event"
                                }
                            },
                            "required": [
                                "name",
                                "privacy_level",
                                "scheduled_start_time",
                                "entity_type"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": {
        "get": {
            "operationId": "getGuildsScheduledEvent",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "guild_scheduled_event_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildScheduledEvent"
                            }
                        }
                    },
                    "description": "Get a guild scheduled event. Returns a guild scheduled event object on success.\r"
                }
            }
        },
        "patch": {
            "operationId": "patchGuildsScheduledEvent",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "guild_scheduled_event_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildScheduledEvent"
                            }
                        }
                    },
                    "description": "Modify a guild scheduled event. Returns the modified guild scheduled event object on success. Fires a Guild Scheduled Event Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "channel_id": {
                                    "type": "string",
                                    "description": "the channel id of the scheduled event, set to `null` if changing entity type to `EXTERNAL`"
                                },
                                "entity_metadata": {
                                    "type": "object",
                                    "description": "the entity metadata of the scheduled event"
                                },
                                "name": {
                                    "type": "string",
                                    "description": "the name of the scheduled event"
                                },
                                "privacy_level": {
                                    "type": "object",
                                    "description": "the privacy level of the scheduled event"
                                },
                                "scheduled_start_time": {
                                    "type": "string",
                                    "description": "the time to schedule the scheduled event",
                                    "format": "date-time"
                                },
                                "scheduled_end_time": {
                                    "type": "string",
                                    "description": "the time when the scheduled event is scheduled to end",
                                    "format": "date-time"
                                },
                                "description": {
                                    "type": "string",
                                    "description": "the description of the scheduled event"
                                },
                                "entity_type": {
                                    "type": "object",
                                    "description": "the entity type of the scheduled event"
                                },
                                "status": {
                                    "type": "object",
                                    "description": "the status of the scheduled event"
                                },
                                "image": {
                                    "type": "object",
                                    "description": "the cover image of the scheduled event"
                                }
                            }
                        }
                    }
                },
                "required": true
            }
        },
        "delete": {
            "operationId": "deleteGuildsScheduledEvent",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "guild_scheduled_event_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Delete a guild scheduled event. Returns a `204` on success. Fires a Guild Scheduled Event Delete Gateway event."
                }
            }
        }
    },
    "/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}/users": {
        "get": {
            "operationId": "getGuildsScheduledEventsUsers",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "guild_scheduled_event_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/GuildScheduledEventUser"
                                }
                            }
                        }
                    },
                    "description": "Get a list of guild scheduled event users subscribed to a guild scheduled event. Returns a list of guild scheduled event user objects on success. Guild member data, if it exists, is included if the `with_member` query parameter is set.\r"
                }
            }
        }
    },
    "/guilds/templates/{template_code}": {
        "get": {
            "operationId": "getGuildsTemplatesTemplateCode",
            "parameters": [
                {
                    "name": "template_code",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildTemplate"
                            }
                        }
                    },
                    "description": "Returns a guild template object for the given code."
                }
            }
        },
        "post": {
            "operationId": "postGuildsTemplatesTemplateCode",
            "parameters": [
                {
                    "name": "template_code",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Guild"
                            }
                        }
                    },
                    "description": "Create a new guild based on a template. Returns a guild object on success. Fires a Guild Create Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "name of the guild (2-100 characters)"
                                },
                                "icon": {
                                    "type": "object",
                                    "description": "base64 128x128 image for the guild icon"
                                }
                            },
                            "required": [
                                "name"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/guilds/{guild_id}/templates": {
        "get": {
            "operationId": "getGuildsTemplates",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/GuildTemplate"
                                }
                            }
                        }
                    },
                    "description": "Returns an array of guild template objects. Requires the `MANAGE_GUILD` permission."
                }
            }
        },
        "post": {
            "operationId": "postGuildsTemplates",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildTemplate"
                            }
                        }
                    },
                    "description": "Creates a template for the guild. Requires the `MANAGE_GUILD` permission. Returns the created guild template object on success.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "name of the template (1-100 characters)"
                                },
                                "description": {
                                    "type": "string",
                                    "description": "description for the template (0-120 characters)"
                                }
                            },
                            "required": [
                                "name"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/guilds/{guild_id}/templates/{template_code}": {
        "put": {
            "operationId": "putGuildsTemplatesTemplateCode",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "template_code",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildTemplate"
                            }
                        }
                    },
                    "description": "OK"
                }
            }
        },
        "patch": {
            "operationId": "patchGuildsTemplatesTemplateCode",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "template_code",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildTemplate"
                            }
                        }
                    },
                    "description": "Modifies the template's metadata. Requires the `MANAGE_GUILD` permission. Returns the guild template object on success.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "name of the template (1-100 characters)"
                                },
                                "description": {
                                    "type": "string",
                                    "description": "description for the template (0-120 characters)"
                                }
                            }
                        }
                    }
                },
                "required": true
            }
        },
        "delete": {
            "operationId": "deleteGuildsTemplatesTemplateCode",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "template_code",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildTemplate"
                            }
                        }
                    },
                    "description": "Deletes the template. Requires the `MANAGE_GUILD` permission. Returns the deleted guild template object on success."
                }
            }
        }
    },
    "/invites/{invite_code}": {
        "get": {
            "operationId": "getInvitesInviteCode",
            "parameters": [
                {
                    "name": "invite_code",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Invite"
                            }
                        }
                    },
                    "description": "Returns an invite object for the given code.\r"
                }
            }
        },
        "delete": {
            "operationId": "deleteInvitesInviteCode",
            "parameters": [
                {
                    "name": "invite_code",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Invite"
                            }
                        }
                    },
                    "description": "Delete an invite. Requires the `MANAGE_CHANNELS` permission on the channel this invite belongs to, or `MANAGE_GUILD` to remove any invite across the guild. Returns an invite object on success. Fires an Invite Delete Gateway event.\r"
                }
            }
        }
    },
    "/stage-instances": {
        "post": {
            "operationId": "postStageInstances",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/StageInstance"
                            }
                        }
                    },
                    "description": "Creates a new Stage instance associated to a Stage channel. Returns that Stage instance. Fires a Stage Instance Create Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "channel_id": {
                                    "type": "string",
                                    "description": "The id of the Stage channel"
                                },
                                "topic": {
                                    "type": "string",
                                    "description": "The topic of the Stage instance (1-120 characters)"
                                },
                                "privacy_level": {
                                    "type": "integer",
                                    "description": "The [privacy level](#DOCS_RESOURCES_STAGE_INSTANCE/stage-instance-object-privacy-level) of the Stage instance (default GUILD_ONLY)"
                                },
                                "send_start_notification": {
                                    "type": "boolean",
                                    "description": "Notify @everyone that a Stage instance has started"
                                }
                            },
                            "required": [
                                "channel_id",
                                "topic"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/stage-instances/{channel_id}": {
        "get": {
            "operationId": "getStageInstance",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Gets the stage instance associated with the Stage channel, if it exists."
                }
            }
        },
        "patch": {
            "operationId": "patchStageInstance",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/StageInstance"
                            }
                        }
                    },
                    "description": "Updates fields of an existing Stage instance. Returns the updated Stage instance. Fires a Stage Instance Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "topic": {
                                    "type": "string",
                                    "description": "The topic of the Stage instance (1-120 characters)"
                                },
                                "privacy_level": {
                                    "type": "integer",
                                    "description": "The [privacy level](#DOCS_RESOURCES_STAGE_INSTANCE/stage-instance-object-privacy-level) of the Stage instance"
                                }
                            }
                        }
                    }
                },
                "required": true
            }
        },
        "delete": {
            "operationId": "deleteStageInstance",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Deletes the Stage instance. Returns `204 No Content`. Fires a Stage Instance Delete Gateway event.\r"
                }
            }
        }
    },
    "/stickers/{sticker_id}": {
        "get": {
            "operationId": "getSticker",
            "parameters": [
                {
                    "name": "sticker_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Sticker"
                            }
                        }
                    },
                    "description": "Returns a sticker object for the given sticker ID."
                }
            }
        }
    },
    "/sticker-packs": {
        "get": {
            "operationId": "getStickerPacks",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Returns the list of sticker packs available to Nitro subscribers.\r"
                }
            }
        }
    },
    "/guilds/{guild_id}/stickers": {
        "get": {
            "operationId": "getGuildsStickers",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/Sticker"
                                }
                            }
                        }
                    },
                    "description": "Returns an array of sticker objects for the given guild. Includes `user` fields if the bot has the `MANAGE_GUILD_EXPRESSIONS` permission."
                }
            }
        },
        "post": {
            "operationId": "postGuildsStickers",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Sticker"
                            }
                        }
                    },
                    "description": "Create a new sticker for the guild. Send a `multipart/form-data` body. Requires the `MANAGE_GUILD_EXPRESSIONS` permission. Returns the new sticker object on success. Fires a Guild Stickers Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "name of the sticker (2-30 characters)"
                                },
                                "description": {
                                    "type": "string",
                                    "description": "description of the sticker (empty or 2-100 characters)"
                                },
                                "tags": {
                                    "type": "string",
                                    "description": "autocomplete/suggestion tags for the sticker (max 200 characters)"
                                }
                            },
                            "required": [
                                "name",
                                "description",
                                "tags",
                                "file"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/guilds/{guild_id}/stickers/{sticker_id}": {
        "get": {
            "operationId": "getGuildsSticker",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "sticker_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Sticker"
                            }
                        }
                    },
                    "description": "Returns a sticker object for the given guild and sticker IDs. Includes the `user` field if the bot has the `MANAGE_GUILD_EXPRESSIONS` permission."
                }
            }
        },
        "patch": {
            "operationId": "patchGuildsSticker",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "sticker_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Sticker"
                            }
                        }
                    },
                    "description": "Modify the given sticker. Requires the `MANAGE_GUILD_EXPRESSIONS` permission. Returns the updated sticker object on success. Fires a Guild Stickers Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "name of the sticker (2-30 characters)"
                                },
                                "description": {
                                    "type": "string",
                                    "description": "description of the sticker (2-100 characters)"
                                },
                                "tags": {
                                    "type": "string",
                                    "description": "autocomplete/suggestion tags for the sticker (max 200 characters)"
                                }
                            },
                            "required": [
                                "name",
                                "description",
                                "tags"
                            ]
                        }
                    }
                },
                "required": true
            }
        },
        "delete": {
            "operationId": "deleteGuildsSticker",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "sticker_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Delete the given sticker. Requires the `MANAGE_GUILD_EXPRESSIONS` permission. Returns `204 No Content` on success. Fires a Guild Stickers Update Gateway event.\r"
                }
            }
        }
    },
    "/users/@me": {
        "get": {
            "operationId": "getUsersMe",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/User"
                            }
                        }
                    },
                    "description": "Returns the user object of the requester's account. For OAuth2, this requires the `identify` scope, which will return the object _without_ an email, and optionally the `email` scope, which returns the object _with_ an email."
                }
            }
        },
        "patch": {
            "operationId": "patchUsersMe",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/User"
                            }
                        }
                    },
                    "description": "Modify the requester's user account settings. Returns a user object on success. Fires a User Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string",
                                    "description": "user's username, if changed may cause the user's discriminator to be randomized."
                                },
                                "avatar": {
                                    "type": "object",
                                    "description": "if passed, modifies the user's avatar"
                                }
                            },
                            "required": [
                                "username",
                                "avatar"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/users/{user_id}": {
        "get": {
            "operationId": "getUser",
            "parameters": [
                {
                    "name": "user_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/User"
                            }
                        }
                    },
                    "description": "Returns a user object for a given user ID."
                }
            }
        }
    },
    "/users/@me/guilds": {
        "get": {
            "operationId": "getUsersMeGuilds",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/Guild"
                                }
                            }
                        }
                    },
                    "description": "Returns a list of partial guild objects the current user is a member of. Requires the `guilds` OAuth2 scope.\r"
                }
            }
        }
    },
    "/users/@me/guilds/{guild_id}/member": {
        "get": {
            "operationId": "getUsersMeGuildsMember",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildMember"
                            }
                        }
                    },
                    "description": "Returns a guild member object for the current user. Requires the `guilds.members.read` OAuth2 scope."
                }
            }
        }
    },
    "/users/@me/guilds/{guild_id}": {
        "delete": {
            "operationId": "deleteUsersMeGuild",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "OK"
                }
            }
        }
    },
    "/users/@me/channels": {
        "post": {
            "operationId": "postUsersMeChannels",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Channel"
                            }
                        }
                    },
                    "description": "Create a new group DM channel with multiple users. Returns a DM channel object. This endpoint was intended to be used with the now-deprecated GameBridge SDK. Fires a Channel Create Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "access_tokens": {
                                    "type": "array",
                                    "description": "access tokens of users that have granted your app the `gdm.join` scope",
                                    "items": {
                                        "type": "string"
                                    }
                                },
                                "nicks": {
                                    "type": "array",
                                    "description": "a dictionary of user ids to their respective nicknames",
                                    "items": {
                                        "type": "string"
                                    }
                                }
                            },
                            "required": [
                                "access_tokens",
                                "nicks"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/users/@me/connections": {
        "get": {
            "operationId": "getUsersMeConnections",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/Connection"
                                }
                            }
                        }
                    },
                    "description": "Returns a list of connection objects. Requires the `connections` OAuth2 scope."
                }
            }
        }
    },
    "/users/@me/applications/{application_id}/role-connection": {
        "get": {
            "operationId": "getUsersMeApplicationsRoleConnection",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ApplicationRoleConnection"
                            }
                        }
                    },
                    "description": "Returns the application role connection for the user. Requires an OAuth2 access token with `role_connections.write` scope for the application specified in the path."
                }
            }
        },
        "put": {
            "operationId": "putUsersMeApplicationsRoleConnection",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Updates and returns the application role connection for the user. Requires an OAuth2 access token with `role_connections.write` scope for the application specified in the path.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "platform_name": {
                                    "type": "string",
                                    "description": "the vanity name of the platform a bot has connected (max 50 characters)"
                                },
                                "platform_username": {
                                    "type": "string",
                                    "description": "the username on the platform a bot has connected (max 100 characters)"
                                },
                                "metadata": {
                                    "type": "object",
                                    "description": "object mapping [application role connection metadata](#DOCS_RESOURCES_APPLICATION_ROLE_CONNECTION_METADATA/application-role-connection-metadata-object) keys to their `string`-ified value (max 100 characters) for the user on the platform a bot has connected"
                                }
                            }
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/voice/regions": {
        "get": {
            "operationId": "getVoiceRegions",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/VoiceRegion"
                                }
                            }
                        }
                    },
                    "description": "Returns an array of voice region objects that can be used when setting a voice or stage channel's `rtc_region`."
                }
            }
        }
    },
    "/channels/{channel_id}/webhooks": {
        "post": {
            "operationId": "postChannelsWebhooks",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Creates a new webhook and returns a webhook object on success. Requires the `MANAGE_WEBHOOKS` permission. Fires a Webhooks Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "name of the webhook (1-80 characters)"
                                },
                                "avatar": {
                                    "type": "object",
                                    "description": "image for the default webhook avatar"
                                }
                            },
                            "required": [
                                "name"
                            ]
                        }
                    }
                },
                "required": true
            }
        },
        "get": {
            "operationId": "getChannelsWebhooks",
            "parameters": [
                {
                    "name": "channel_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/Webhook"
                                }
                            }
                        }
                    },
                    "description": "Returns a list of channel webhook objects. Requires the `MANAGE_WEBHOOKS` permission."
                }
            }
        }
    },
    "/guilds/{guild_id}/webhooks": {
        "get": {
            "operationId": "getGuildsWebhooks",
            "parameters": [
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/Webhook"
                                }
                            }
                        }
                    },
                    "description": "Returns a list of guild webhook objects. Requires the `MANAGE_WEBHOOKS` permission."
                }
            }
        }
    },
    "/webhooks/{webhook_id}": {
        "get": {
            "operationId": "getWebhook",
            "parameters": [
                {
                    "name": "webhook_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Webhook"
                            }
                        }
                    },
                    "description": "Returns the new webhook object for the given id."
                }
            }
        },
        "patch": {
            "operationId": "patchWebhook",
            "parameters": [
                {
                    "name": "webhook_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Webhook"
                            }
                        }
                    },
                    "description": "Modify a webhook. Requires the `MANAGE_WEBHOOKS` permission. Returns the updated webhook object on success. Fires a Webhooks Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "the default name of the webhook"
                                },
                                "avatar": {
                                    "type": "object",
                                    "description": "image for the default webhook avatar"
                                },
                                "channel_id": {
                                    "type": "string",
                                    "description": "the new channel id this webhook should be moved to"
                                }
                            },
                            "required": [
                                "name",
                                "avatar",
                                "channel_id"
                            ]
                        }
                    }
                },
                "required": true
            }
        },
        "delete": {
            "operationId": "deleteWebhook",
            "parameters": [
                {
                    "name": "webhook_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Delete a webhook permanently. Requires the `MANAGE_WEBHOOKS` permission. Returns a `204 No Content` response on success. Fires a Webhooks Update Gateway event.\r"
                }
            }
        }
    },
    "/webhooks/{webhook_id}/{webhook_token}": {
        "get": {
            "operationId": "getWebhooksWebhookToken",
            "parameters": [
                {
                    "name": "webhook_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "webhook_token",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "OK"
                }
            }
        },
        "patch": {
            "operationId": "patchWebhooksWebhookToken",
            "parameters": [
                {
                    "name": "webhook_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "webhook_token",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "OK"
                }
            }
        },
        "delete": {
            "operationId": "deleteWebhooksWebhookToken",
            "parameters": [
                {
                    "name": "webhook_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "webhook_token",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "OK"
                }
            }
        },
        "post": {
            "operationId": "postWebhooksWebhookToken",
            "parameters": [
                {
                    "name": "webhook_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "webhook_token",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "OK"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "content": {
                                    "type": "string",
                                    "description": "the message contents (up to 2000 characters)"
                                },
                                "username": {
                                    "type": "string",
                                    "description": "override the default username of the webhook"
                                },
                                "avatar_url": {
                                    "type": "string",
                                    "description": "override the default avatar of the webhook"
                                },
                                "tts": {
                                    "type": "boolean",
                                    "description": "true if this is a TTS message"
                                },
                                "embeds": {
                                    "type": "array",
                                    "description": "embedded `rich` content",
                                    "items": {
                                        "$ref": "#/components/schemas/Embed"
                                    }
                                },
                                "allowed_mentions": {
                                    "$ref": "#/components/schemas/AllowedMentions",
                                    "description": "allowed mentions for the message"
                                },
                                "components": {
                                    "type": "array",
                                    "description": "the components to include with the message",
                                    "items": {
                                        "$ref": "#/components/schemas/Component"
                                    }
                                },
                                "payload_json": {
                                    "type": "string",
                                    "description": "JSON encoded body of non-file params"
                                },
                                "attachments": {
                                    "type": "array",
                                    "description": "attachment objects with filename and description",
                                    "items": {
                                        "$ref": "#/components/schemas/Attachment"
                                    }
                                },
                                "flags": {
                                    "type": "integer",
                                    "description": "[message flags](#DOCS_RESOURCES_CHANNEL/message-object-message-flags) combined as a [bitfield](https://en.wikipedia.org/wiki/Bit_field) (only `SUPPRESS_EMBEDS` can be set)"
                                },
                                "thread_name": {
                                    "type": "string",
                                    "description": "name of thread to create (requires the webhook channel to be a forum channel)"
                                }
                            },
                            "required": [
                                "content",
                                "username",
                                "avatar_url",
                                "tts",
                                "embeds",
                                "allowed_mentions",
                                "components",
                                "files",
                                "payload_json",
                                "attachments",
                                "flags",
                                "thread_name"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": {
        "get": {
            "operationId": "getWebhooksWebhookTokenMessage",
            "parameters": [
                {
                    "name": "webhook_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "webhook_token",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Message"
                            }
                        }
                    },
                    "description": "Returns a previously-sent webhook message from the same token. Returns a message object on success.\r"
                }
            }
        },
        "patch": {
            "operationId": "patchWebhooksWebhookTokenMessage",
            "parameters": [
                {
                    "name": "webhook_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "webhook_token",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Message"
                            }
                        }
                    },
                    "description": "Edits a previously-sent webhook message from the same token. Returns a message object on success.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "content": {
                                    "type": "string",
                                    "description": "the message contents (up to 2000 characters)"
                                },
                                "embeds": {
                                    "type": "array",
                                    "description": "embedded `rich` content",
                                    "items": {
                                        "$ref": "#/components/schemas/Embed"
                                    }
                                },
                                "allowed_mentions": {
                                    "$ref": "#/components/schemas/AllowedMentions",
                                    "description": "allowed mentions for the message"
                                },
                                "components": {
                                    "type": "array",
                                    "description": "the components to include with the message",
                                    "items": {
                                        "$ref": "#/components/schemas/Component"
                                    }
                                },
                                "payload_json": {
                                    "type": "string",
                                    "description": "JSON encoded body of non-file params (multipart/form-data only)"
                                },
                                "attachments": {
                                    "type": "array",
                                    "description": "attached files to keep and possible descriptions for new files",
                                    "items": {
                                        "$ref": "#/components/schemas/Attachment"
                                    }
                                }
                            },
                            "required": [
                                "content",
                                "embeds",
                                "allowed_mentions",
                                "components",
                                "files",
                                "payload_json",
                                "attachments"
                            ]
                        }
                    }
                },
                "required": true
            }
        },
        "delete": {
            "operationId": "deleteWebhooksWebhookTokenMessage",
            "parameters": [
                {
                    "name": "webhook_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "webhook_token",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Deletes a message that was created by the webhook. Returns a `204 No Content` response on success.\r"
                }
            }
        }
    },
    "/gateway": {
        "get": {
            "operationId": "getGateway",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "url": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "description": "Returns an object with a valid WSS URL which the app can use when Connecting to the Gateway. Apps should cache this value and only call this endpoint to retrieve a new URL when they are unable to properly establish a connection using the cached one.\r"
                }
            }
        }
    },
    "/gateway/bot": {
        "get": {
            "operationId": "getGatewayBot",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "session_start_limit": {
                                        "$ref": "#/components/schemas/SessionStartLimit"
                                    },
                                    "shards": {
                                        "type": "number"
                                    },
                                    "url": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "description": "Returns an object based on the information in Get Gateway, plus additional metadata that can help during the operation of large or sharded bots. Unlike the Get Gateway, this route should not be cached for extended periods of time as the value is not guaranteed to be the same per-call, and changes as the bot joins/leaves guilds.\r"
                }
            }
        }
    },
    "/oauth2/applications/@me": {
        "get": {
            "operationId": "getOauth2ApplicationsMe",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Returns the bot's application object."
                }
            }
        }
    },
    "/oauth2/@me": {
        "get": {
            "operationId": "getOauth2Me",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Returns info about the current authorization. Requires authentication with a bearer token.\r"
                }
            }
        }
    },
    "/applications/{application_id}/commands": {
        "get": {
            "operationId": "getApplicationsCommands",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/ApplicationCommand"
                                }
                            }
                        }
                    },
                    "description": "OK"
                }
            }
        },
        "post": {
            "operationId": "postApplicationsCommands",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Create a new global command. Returns `201` if a command with the same name does not already exist, or a `200` if it does (in which case the previous command will be overwritten). Both responses include an application command object.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "[Name of command](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/application-command-object-application-command-naming), 1-32 characters"
                                },
                                "name_localizations": {
                                    "type": "object",
                                    "description": "Localization dictionary for the `name` field. Values follow the same restrictions as `name`"
                                },
                                "description": {
                                    "type": "string",
                                    "description": "1-100 character description for `CHAT_INPUT` commands"
                                },
                                "description_localizations": {
                                    "type": "object",
                                    "description": "Localization dictionary for the `description` field. Values follow the same restrictions as `description`"
                                },
                                "options": {
                                    "type": "array",
                                    "description": "the parameters for the command",
                                    "items": {
                                        "type": "object"
                                    }
                                },
                                "default_member_permissions": {
                                    "type": "string",
                                    "description": "Set of [permissions](#DOCS_TOPICS_PERMISSIONS) represented as a bit set"
                                },
                                "dm_permission": {
                                    "type": "boolean",
                                    "description": "Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible."
                                },
                                "default_permission": {
                                    "type": "boolean",
                                    "description": "Replaced by `default_member_permissions` and will be deprecated in the future. Indicates whether the command is enabled by default when the app is added to a guild. Defaults to `true`"
                                },
                                "type": {
                                    "type": "object",
                                    "description": "Type of command, defaults `1` if not set"
                                },
                                "nsfw": {
                                    "type": "boolean",
                                    "description": "Indicates whether the command is [age-restricted](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/agerestricted-commands)"
                                }
                            },
                            "required": [
                                "name"
                            ]
                        }
                    }
                },
                "required": true
            }
        },
        "put": {
            "operationId": "putApplicationsCommands",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "OK"
                }
            }
        }
    },
    "/applications/{application_id}/commands/{command_id}": {
        "get": {
            "operationId": "getApplicationsCommand",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "command_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ApplicationCommand"
                            }
                        }
                    },
                    "description": "OK"
                }
            }
        },
        "patch": {
            "operationId": "patchApplicationsCommand",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "command_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Edit a global command. Returns `200` and an application command object. All fields are optional, but any fields provided will entirely overwrite the existing values of those fields.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "[Name of command](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/application-command-object-application-command-naming), 1-32 characters"
                                },
                                "name_localizations": {
                                    "type": "object",
                                    "description": "Localization dictionary for the `name` field. Values follow the same restrictions as `name`"
                                },
                                "description": {
                                    "type": "string",
                                    "description": "1-100 character description"
                                },
                                "description_localizations": {
                                    "type": "object",
                                    "description": "Localization dictionary for the `description` field. Values follow the same restrictions as `description`"
                                },
                                "options": {
                                    "type": "array",
                                    "description": "the parameters for the command",
                                    "items": {
                                        "type": "object"
                                    }
                                },
                                "default_member_permissions": {
                                    "type": "string",
                                    "description": "Set of [permissions](#DOCS_TOPICS_PERMISSIONS) represented as a bit set"
                                },
                                "dm_permission": {
                                    "type": "boolean",
                                    "description": "Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible."
                                },
                                "default_permission": {
                                    "type": "boolean",
                                    "description": "Replaced by `default_member_permissions` and will be deprecated in the future. Indicates whether the command is enabled by default when the app is added to a guild. Defaults to `true`"
                                },
                                "nsfw": {
                                    "type": "boolean",
                                    "description": "Indicates whether the command is [age-restricted](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/agerestricted-commands)"
                                }
                            }
                        }
                    }
                },
                "required": true
            }
        },
        "delete": {
            "operationId": "deleteApplicationsCommand",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "command_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Deletes a global command. Returns `204 No Content` on success."
                }
            }
        }
    },
    "/applications/{application_id}/guilds/{guild_id}/commands": {
        "get": {
            "operationId": "getApplicationsGuildsCommands",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/ApplicationCommand"
                                }
                            }
                        }
                    },
                    "description": "OK"
                }
            }
        },
        "post": {
            "operationId": "postApplicationsGuildsCommands",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Create a new guild command. New guild commands will be available in the guild immediately. Returns `201` if a command with the same name does not already exist, or a `200` if it does (in which case the previous command will be overwritten). Both responses include an application command object.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "[Name of command](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/application-command-object-application-command-naming), 1-32 characters"
                                },
                                "name_localizations": {
                                    "type": "object",
                                    "description": "Localization dictionary for the `name` field. Values follow the same restrictions as `name`"
                                },
                                "description": {
                                    "type": "string",
                                    "description": "1-100 character description for `CHAT_INPUT` commands"
                                },
                                "description_localizations": {
                                    "type": "object",
                                    "description": "Localization dictionary for the `description` field. Values follow the same restrictions as `description`"
                                },
                                "options": {
                                    "type": "array",
                                    "description": "Parameters for the command",
                                    "items": {
                                        "type": "object"
                                    }
                                },
                                "default_member_permissions": {
                                    "type": "string",
                                    "description": "Set of [permissions](#DOCS_TOPICS_PERMISSIONS) represented as a bit set"
                                },
                                "default_permission": {
                                    "type": "boolean",
                                    "description": "Replaced by `default_member_permissions` and will be deprecated in the future. Indicates whether the command is enabled by default when the app is added to a guild. Defaults to `true`"
                                },
                                "type": {
                                    "type": "object",
                                    "description": "Type of command, defaults `1` if not set"
                                },
                                "nsfw": {
                                    "type": "boolean",
                                    "description": "Indicates whether the command is [age-restricted](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/agerestricted-commands)"
                                }
                            },
                            "required": [
                                "name"
                            ]
                        }
                    }
                },
                "required": true
            }
        },
        "put": {
            "operationId": "putApplicationsGuildsCommands",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "OK"
                }
            }
        }
    },
    "/applications/{application_id}/guilds/{guild_id}/commands/{command_id}": {
        "get": {
            "operationId": "getApplicationsGuildsCommand",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "command_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/ApplicationCommand"
                            }
                        }
                    },
                    "description": "OK"
                }
            }
        },
        "patch": {
            "operationId": "patchApplicationsGuildsCommand",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "command_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Edit a guild command. Updates for guild commands will be available immediately. Returns `200` and an application command object. All fields are optional, but any fields provided will entirely overwrite the existing values of those fields.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string",
                                    "description": "[Name of command](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/application-command-object-application-command-naming), 1-32 characters"
                                },
                                "name_localizations": {
                                    "type": "object",
                                    "description": "Localization dictionary for the `name` field. Values follow the same restrictions as `name`"
                                },
                                "description": {
                                    "type": "string",
                                    "description": "1-100 character description"
                                },
                                "description_localizations": {
                                    "type": "object",
                                    "description": "Localization dictionary for the `description` field. Values follow the same restrictions as `description`"
                                },
                                "options": {
                                    "type": "array",
                                    "description": "Parameters for the command",
                                    "items": {
                                        "type": "object"
                                    }
                                },
                                "default_member_permissions": {
                                    "type": "string",
                                    "description": "Set of [permissions](#DOCS_TOPICS_PERMISSIONS) represented as a bit set"
                                },
                                "default_permission": {
                                    "type": "boolean",
                                    "description": "Replaced by `default_member_permissions` and will be deprecated in the future. Indicates whether the command is enabled by default when the app is added to a guild. Defaults to `true`"
                                },
                                "nsfw": {
                                    "type": "boolean",
                                    "description": "Indicates whether the command is [age-restricted](#DOCS_INTERACTIONS_APPLICATION_COMMANDS/agerestricted-commands)"
                                }
                            }
                        }
                    }
                },
                "required": true
            }
        },
        "delete": {
            "operationId": "deleteApplicationsGuildsCommand",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "command_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Delete a guild command. Returns `204 No Content` on success."
                }
            }
        }
    },
    "/applications/{application_id}/guilds/{guild_id}/commands/permissions": {
        "get": {
            "operationId": "getApplicationsGuildsCommandsPermissions",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/GuildApplicationCommandPermissions"
                                }
                            }
                        }
                    },
                    "description": "OK"
                }
            }
        },
        "put": {
            "operationId": "putApplicationsGuildsCommandsPermissions",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "OK"
                }
            }
        }
    },
    "/applications/{application_id}/guilds/{guild_id}/commands/{command_id}/permissions": {
        "get": {
            "operationId": "getApplicationsGuildsCommandPermissions",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "command_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/GuildApplicationCommandPermissions"
                            }
                        }
                    },
                    "description": "OK"
                }
            }
        },
        "put": {
            "operationId": "putApplicationsGuildsCommandPermissions",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "guild_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "command_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Edits command permissions for a specific command for your application in a guild and returns a guild application command permissions object. Fires an Application Command Permissions Update Gateway event.\r"
                }
            },
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "permissions": {
                                    "type": "array",
                                    "description": "Permissions for the command in the guild",
                                    "items": {
                                        "type": "object"
                                    }
                                }
                            },
                            "required": [
                                "permissions"
                            ]
                        }
                    }
                },
                "required": true
            }
        }
    },
    "/interactions/{interaction_id}/{interaction_token}/callback": {
        "post": {
            "operationId": "postInteractionsInteractionTokenCallback",
            "parameters": [
                {
                    "name": "interaction_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "interaction_token",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Create a response to an Interaction from the gateway. Body is an interaction response. Returns `204 No Content`.\r"
                }
            }
        }
    },
    "/webhooks/{application_id}/{interaction_token}/messages/@original": {
        "get": {
            "operationId": "getWebhooksInteractionTokenMessagesOriginal",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "interaction_token",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Returns the initial Interaction response. Functions the same as Get Webhook Message."
                }
            }
        },
        "patch": {
            "operationId": "patchWebhooksInteractionTokenMessagesOriginal",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "interaction_token",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Edits the initial Interaction response. Functions the same as Edit Webhook Message."
                }
            }
        },
        "delete": {
            "operationId": "deleteWebhooksInteractionTokenMessagesOriginal",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "interaction_token",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Deletes the initial Interaction response. Returns `204 No Content` on success."
                }
            }
        }
    },
    "/webhooks/{application_id}/{interaction_token}": {
        "post": {
            "operationId": "postWebhooksInteractionToken",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "interaction_token",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Create a followup message for an Interaction. Functions the same as Execute Webhook, but `wait` is always true. The `thread_id`, `avatar_url`, and `username` parameters are not supported when using this endpoint for interaction followups.\r"
                }
            }
        }
    },
    "/webhooks/{application_id}/{interaction_token}/messages/{message_id}": {
        "get": {
            "operationId": "getWebhooksInteractionTokenMessage",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "interaction_token",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Returns a followup message for an Interaction. Functions the same as Get Webhook Message."
                }
            }
        },
        "patch": {
            "operationId": "patchWebhooksInteractionTokenMessage",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "interaction_token",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Edits a followup message for an Interaction. Functions the same as Edit Webhook Message."
                }
            }
        },
        "delete": {
            "operationId": "deleteWebhooksInteractionTokenMessage",
            "parameters": [
                {
                    "name": "application_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "interaction_token",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "name": "message_id",
                    "in": "path",
                    "required": true,
                    "schema": {
                        "type": "string"
                    }
                }
            ],
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object"
                            }
                        }
                    },
                    "description": "Deletes a followup message for an Interaction. Returns `204 No Content` on success."
                }
            }
        }
    }
};
