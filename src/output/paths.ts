export const paths = {
    "/applications/{application_id}/role-connections/metadata": {
        "get": {
            "description": "Returns a list of application role connection metadata objects for the given application.",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/audit-logs": {
        "get": {
            "description": "Returns an audit log object for the guild. Requires the `VIEW_AUDIT_LOG` permission.\r",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/auto-moderation/rules": {
        "get": {
            "description": "Get a list of all rules currently configured for the guild. Returns a list of auto moderation rule objects for the given guild.\r",
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
                    }
                }
            }
        },
        "post": {
            "description": "Create a new rule. Returns an auto moderation rule on success. Fires an Auto Moderation Rule Create Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/auto-moderation/rules/{auto_moderation_rule_id}": {
        "patch": {
            "description": "Modify an existing rule. Returns an auto moderation rule on success. Fires an Auto Moderation Rule Update Gateway event.\r",
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
                    }
                }
            }
        },
        "delete": {
            "description": "Delete a rule. Returns a `204` on success. Fires an Auto Moderation Rule Delete Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}": {
        "get": {
            "description": "Get a channel by ID. Returns a channel object.  If the channel is a thread, a thread member object is included in the returned result.",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/messages": {
        "get": {
            "description": "Retrieves the messages in a channel. Returns an array of message objects on success.\r",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/messages/{message_id}": {
        "get": {
            "description": "Retrieves a specific message in the channel. Returns a message object on success.\r",
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
                    }
                }
            }
        },
        "patch": {
            "description": "Edit a previously sent message. The fields `content`, `embeds`, and `flags` can be edited by the original message author. Other users can only edit `flags` and only if they have the `MANAGE_MESSAGES` permission in the corresponding channel. When specifying flags, ensure to include all previously set flags/bits in addition to ones that you are modifying. Only `flags` documented in the table below may be modified by users (unsupported flag changes are currently ignored without error).\r",
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
                    }
                }
            }
        },
        "delete": {
            "description": "Delete a message. If operating on a guild channel and trying to delete a message that was not sent by the current user, this endpoint requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success. Fires a Message Delete Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/messages/{message_id}/crosspost": {
        "post": {
            "description": "Crosspost a message in an Announcement Channel to following channels. This endpoint requires the `SEND_MESSAGES` permission, if the current user sent the message, or additionally the `MANAGE_MESSAGES` permission, for all other messages, to be present for the current user.\r",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/messages/{message_id}/reactions/{emoji}/@me": {
        "delete": {
            "description": "Delete a reaction the current user has made for the message. Returns a 204 empty response on success. Fires a Message Reaction Remove Gateway event.\r",
            "operationId": "deleteChannelsMessagesReactionsMe",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/messages/{message_id}/reactions/{emoji}": {
        "get": {
            "description": "Get a list of users that reacted with this emoji. Returns an array of user objects on success.\r",
            "operationId": "getChannelsMessagesReaction",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/messages/{message_id}/reactions": {
        "delete": {
            "description": "Deletes all reactions on a message. This endpoint requires the `MANAGE_MESSAGES` permission to be present on the current user. Fires a Message Reaction Remove All Gateway event.",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/permissions/{overwrite_id}": {
        "put": {
            "description": "Edit the channel permission overwrites for a user or role in a channel. Only usable for guild channels. Requires the `MANAGE_ROLES` permission. Only permissions your bot has in the guild or parent channel (if applicable) can be allowed/denied (unless your bot has a `MANAGE_ROLES` overwrite in the channel). Returns a 204 empty response on success. Fires a Channel Update Gateway event. For more information about permissions, see permissions.\r",
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
                    }
                }
            }
        },
        "delete": {
            "description": "Delete a channel permission overwrite for a user or role in a channel. Only usable for guild channels. Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success. Fires a Channel Update Gateway event. For more information about permissions, see permissions\r",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/invites": {
        "get": {
            "description": "Returns a list of invite objects (with invite metadata) for the channel. Only usable for guild channels. Requires the `MANAGE_CHANNELS` permission.",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/typing": {
        "post": {
            "description": "Post a typing indicator for the specified channel. Generally bots should **not** implement this route. However, if a bot is responding to a command and expects the computation to take a few seconds, this endpoint may be called to let the user know that the bot is processing their message. Returns a 204 empty response on success. Fires a Typing Start Gateway event.",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/pins/{message_id}": {
        "put": {
            "description": "Pin a message in a channel. Requires the `MANAGE_MESSAGES` permission. Returns a 204 empty response on success. Fires a Channel Pins Update Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/recipients/{user_id}": {
        "put": {
            "description": "Adds a recipient to a Group DM using their access token.",
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
                    }
                }
            }
        },
        "delete": {
            "description": "Removes a recipient from a Group DM.",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/threads": {
        "post": {
            "description": "Creates a new thread in a forum channel, and sends a message within the created thread. Returns a channel, with a nested message object, on success, and a 400 BAD REQUEST on invalid parameters. Fires a Thread Create and Message Create Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/thread-members/@me": {
        "put": {
            "description": "Adds the current user to a thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update and a Thread Create Gateway event.",
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
                    }
                }
            }
        },
        "delete": {
            "description": "Removes the current user from a thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update Gateway event.",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/thread-members/{user_id}": {
        "get": {
            "description": "Returns a thread member object for the specified user if they are a member of the thread, returns a 404 response otherwise.\r",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/thread-members": {
        "get": {
            "description": "Returns array of thread members objects that are members of the thread.\r",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/threads/archived/public": {
        "get": {
            "description": "Returns archived threads in the channel that are public. When called on a `GUILD_TEXT` channel, returns threads of type `PUBLIC_THREAD`. When called on a `GUILD_ANNOUNCEMENT` channel returns threads of type `ANNOUNCEMENT_THREAD`. Threads are ordered by `archive_timestamp`, in descending order. Requires the `READ_MESSAGE_HISTORY` permission.",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/threads/archived/private": {
        "get": {
            "description": "Returns archived threads in the channel that are of type `PRIVATE_THREAD`. Threads are ordered by `archive_timestamp`, in descending order. Requires both the `READ_MESSAGE_HISTORY` and `MANAGE_THREADS` permissions.",
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
                                "$ref": "#/components/schemas/ChannelObjectChanne"
                            }
                        }
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/users/@me/threads/archived/private": {
        "get": {
            "description": "Returns archived threads in the channel that are of type `PRIVATE_THREAD`, and the user has joined. Threads are ordered by their `id`, in descending order. Requires the `READ_MESSAGE_HISTORY` permission.",
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
                                "$ref": "#/components/schemas/ChannelObjectChanne"
                            }
                        }
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/emojis": {
        "get": {
            "description": "Returns a list of emoji objects for the given guild.",
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
                    }
                }
            }
        },
        "post": {
            "description": "Create a new emoji for the guild. Requires the `MANAGE_GUILD_EXPRESSIONS` permission. Returns the new emoji object on success. Fires a Guild Emojis Update Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/emojis/{emoji_id}": {
        "patch": {
            "description": "Modify the given emoji. Requires the `MANAGE_GUILD_EXPRESSIONS` permission. Returns the updated emoji object on success. Fires a Guild Emojis Update Gateway event.\r",
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
                    }
                }
            }
        },
        "delete": {
            "description": "Delete the given emoji. Requires the `MANAGE_GUILD_EXPRESSIONS` permission. Returns `204 No Content` on success. Fires a Guild Emojis Update Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/guilds": {
        "post": {
            "description": "Create a new guild. Returns a guild object on success. Fires a Guild Create Gateway event.\r",
            "operationId": "postGuilds",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Guild"
                            }
                        }
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}": {
        "get": {
            "description": "Returns the guild object for the given id. If `with_counts` is set to `true`, this endpoint will also return `approximate_member_count` and `approximate_presence_count` for the guild.",
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
                    }
                }
            }
        },
        "delete": {
            "description": "Delete a guild permanently. User must be owner. Returns `204 No Content` on success. Fires a Guild Delete Gateway event.",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/preview": {
        "get": {
            "description": "Returns the guild preview object for the given id. If the user is not in the guild, then the guild must be lurkable.",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/channels": {
        "post": {
            "description": "Create a new channel object for the guild. Requires the `MANAGE_CHANNELS` permission. If setting permission overwrites, only permissions your bot has in the guild can be allowed/denied. Setting `MANAGE_ROLES` permission in channels is only possible for guild administrators. Returns the new channel object on success. Fires a Channel Create Gateway event.\r",
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
                    }
                }
            }
        },
        "patch": {
            "description": "Modify the positions of a set of channel objects for the guild. Requires `MANAGE_CHANNELS` permission. Returns a 204 empty response on success. Fires multiple Channel Update Gateway events.\r",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/threads/active": {
        "get": {
            "description": "Returns all active threads in the guild, including public and private threads. Threads are ordered by their `id`, in descending order.",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/members/{user_id}": {
        "get": {
            "description": "Returns a guild member object for the specified user.",
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
                    }
                }
            }
        },
        "put": {
            "description": "Adds a user to the guild, provided you have a valid oauth2 access token for the user with the `guilds.join` scope. Returns a 201 Created with the guild member as the body, or 204 No Content if the user is already a member of the guild. Fires a Guild Member Add Gateway event.\r",
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
                    }
                }
            }
        },
        "patch": {
            "description": "Modify attributes of a guild member. Returns a 200 OK with the guild member as the body. Fires a Guild Member Update Gateway event. If the `channel_id` is set to null, this will force the target user to be disconnected from voice.\r",
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
                    }
                }
            }
        },
        "delete": {
            "description": "Remove a member from a guild. Requires `KICK_MEMBERS` permission. Returns a 204 empty response on success. Fires a Guild Member Remove Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/members/search": {
        "get": {
            "description": "Returns a list of guild member objects whose username or nickname starts with a provided string.\r",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/members/@me": {
        "patch": {
            "description": "Modifies the current member in a guild. Returns a 200 with the updated member object on success. Fires a Guild Member Update Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/members/@me/nick": {
        "patch": {
            "description": "Modifies the nickname of the current user in a guild. Returns a 200 with the nickname on success. Fires a Guild Member Update Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/members/{user_id}/roles/{role_id}": {
        "put": {
            "description": "Adds a role to a guild member. Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success. Fires a Guild Member Update Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/bans/{user_id}": {
        "get": {
            "description": "Returns a ban object for the given user or a 404 not found if the ban cannot be found. Requires the `BAN_MEMBERS` permission.",
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
                    }
                }
            }
        },
        "delete": {
            "description": "Remove the ban for a user. Requires the `BAN_MEMBERS` permissions. Returns a 204 empty response on success. Fires a Guild Ban Remove Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/roles": {
        "post": {
            "description": "Create a new role for the guild. Requires the `MANAGE_ROLES` permission. Returns the new role object on success. Fires a Guild Role Create Gateway event. All JSON params are optional.\r",
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
                    }
                }
            }
        },
        "patch": {
            "description": "Modify the positions of a set of role objects for the guild. Requires the `MANAGE_ROLES` permission. Returns a list of all of the guild's role objects on success. Fires multiple Guild Role Update Gateway events.\r",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/roles/{role_id}": {
        "patch": {
            "description": "Modify a guild role. Requires the `MANAGE_ROLES` permission. Returns the updated role on success. Fires a Guild Role Update Gateway event.\r",
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
                    }
                }
            }
        },
        "delete": {
            "description": "Delete a guild role. Requires the `MANAGE_ROLES` permission. Returns a 204 empty response on success. Fires a Guild Role Delete Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/mfa": {
        "post": {
            "description": "Modify a guild's MFA level. Requires guild ownership. Returns the updated level on success. Fires a Guild Update Gateway event.\r",
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
                                "$ref": "#/components/schemas/GuildObjectMf"
                            }
                        }
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/prune": {
        "post": {
            "description": "Begin a prune operation. Requires the `KICK_MEMBERS` permission. Returns an object with one `pruned` key indicating the number of members that were removed in the prune operation. For large guilds it's recommended to set the `compute_prune_count` option to `false`, forcing `pruned` to `null`. Fires multiple Guild Member Remove Gateway events.\r",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/regions": {
        "get": {
            "description": "Returns a list of voice region objects for the guild. Unlike the similar `/voice` route, this returns VIP servers when the guild is VIP-enabled.",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/integrations": {
        "get": {
            "description": "Returns a list of integration objects for the guild. Requires the `MANAGE_GUILD` permission.\r",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/widget": {
        "get": {
            "description": "Returns a guild widget settings object. Requires the `MANAGE_GUILD` permission.",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/widget.json": {
        "get": {
            "description": "Returns the widget for the guild.",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/widget.png": {
        "get": {
            "description": "Returns a PNG image widget for the guild. Requires no permissions or authentication.\r",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/welcome-screen": {
        "get": {
            "description": "Returns the Welcome Screen object for the guild. If the welcome screen is not enabled, the `MANAGE_GUILD` permission is required.",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/onboarding": {
        "get": {
            "description": "Returns the Onboarding object for the guild.",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/voice-states/{user_id}": {
        "patch": {
            "description": "Updates another user's voice state. Fires a Voice State Update Gateway event.",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/scheduled-events": {
        "get": {
            "description": "Returns a list of guild scheduled event objects for the given guild.",
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
                    }
                }
            }
        },
        "post": {
            "description": "Create a guild scheduled event in the guild. Returns a guild scheduled event object on success. Fires a Guild Scheduled Event Create Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/scheduled-events/{guild_scheduled_event_id}": {
        "get": {
            "description": "Get a guild scheduled event. Returns a guild scheduled event object on success.",
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
                    }
                }
            }
        },
        "patch": {
            "description": "Modify a guild scheduled event. Returns the modified guild scheduled event object on success. Fires a Guild Scheduled Event Update Gateway event.\r",
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
                    }
                }
            }
        },
        "delete": {
            "description": "Delete a guild scheduled event. Returns a `204` on success. Fires a Guild Scheduled Event Delete Gateway event.",
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
                    }
                }
            }
        }
    },
    "/guilds/templates/{template_code}": {
        "get": {
            "description": "Returns a guild template object for the given code.",
            "operationId": "getGuildsTemplate",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/templates": {
        "get": {
            "description": "Returns an array of guild template objects. Requires the `MANAGE_GUILD` permission.",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/templates/{template_code}": {
        "put": {
            "operationId": "putGuildsTemplate",
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
                    }
                }
            }
        },
        "delete": {
            "description": "Deletes the template. Requires the `MANAGE_GUILD` permission. Returns the deleted guild template object on success.",
            "operationId": "deleteGuildsTemplate",
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
                    }
                }
            }
        }
    },
    "/invites/{invite_code}": {
        "get": {
            "description": "Returns an invite object for the given code.",
            "operationId": "getInvite",
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
                    }
                }
            }
        },
        "delete": {
            "description": "Delete an invite. Requires the `MANAGE_CHANNELS` permission on the channel this invite belongs to, or `MANAGE_GUILD` to remove any invite across the guild. Returns an invite object on success. Fires an Invite Delete Gateway event.\r",
            "operationId": "deleteInvite",
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
                    }
                }
            }
        }
    },
    "/stage-instances": {
        "post": {
            "description": "Creates a new Stage instance associated to a Stage channel. Returns that Stage instance. Fires a Stage Instance Create Gateway event.\r",
            "operationId": "postStageInstances",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/StageInstanceObjectStageInstanceSt"
                            }
                        }
                    }
                }
            }
        }
    },
    "/stage-instances/{channel_id}": {
        "get": {
            "description": "Gets the stage instance associated with the Stage channel, if it exists.",
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
                    }
                }
            }
        },
        "delete": {
            "description": "Deletes the Stage instance. Returns `204 No Content`. Fires a Stage Instance Delete Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/stickers/{sticker_id}": {
        "get": {
            "description": "Returns a sticker object for the given sticker ID.",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/stickers": {
        "get": {
            "description": "Returns an array of sticker objects for the given guild. Includes `user` fields if the bot has the `MANAGE_GUILD_EXPRESSIONS` permission.",
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
                    }
                }
            }
        },
        "post": {
            "description": "Create a new sticker for the guild. Send a `multipart/form-data` body. Requires the `MANAGE_GUILD_EXPRESSIONS` permission. Returns the new sticker object on success. Fires a Guild Stickers Update Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/guilds/{guild_id}/stickers/{sticker_id}": {
        "patch": {
            "description": "Modify the given sticker. Requires the `MANAGE_GUILD_EXPRESSIONS` permission. Returns the updated sticker object on success. Fires a Guild Stickers Update Gateway event.\r",
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
                    }
                }
            }
        },
        "delete": {
            "description": "Delete the given sticker. Requires the `MANAGE_GUILD_EXPRESSIONS` permission. Returns `204 No Content` on success. Fires a Guild Stickers Update Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/users/@me": {
        "get": {
            "description": "Returns the user object of the requester's account. For OAuth2, this requires the `identify` scope, which will return the object _without_ an email, and optionally the `email` scope, which returns the object _with_ an email.",
            "operationId": "getUsersMe",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/User"
                            }
                        }
                    }
                }
            }
        },
        "patch": {
            "description": "Modify the requester's user account settings. Returns a user object on success. Fires a User Update Gateway event.\r",
            "operationId": "patchUsersMe",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/User"
                            }
                        }
                    }
                }
            }
        }
    },
    "/users/@me/guilds": {
        "get": {
            "description": "Returns a list of partial guild objects the current user is a member of. Requires the `guilds` OAuth2 scope.",
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
                    }
                }
            }
        }
    },
    "/users/@me/guilds/{guild_id}/member": {
        "get": {
            "description": "Returns a guild member object for the current user. Requires the `guilds.members.read` OAuth2 scope.",
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
                    }
                }
            }
        }
    },
    "/users/@me/channels": {
        "post": {
            "description": "Create a new group DM channel with multiple users. Returns a DM channel object. This endpoint was intended to be used with the now-deprecated GameBridge SDK. Fires a Channel Create Gateway event.\r",
            "operationId": "postUsersMeChannels",
            "responses": {
                "200": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Channel"
                            }
                        }
                    }
                }
            }
        }
    },
    "/users/@me/connections": {
        "get": {
            "description": "Returns a list of connection objects. Requires the `connections` OAuth2 scope.",
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
                    }
                }
            }
        }
    },
    "/users/@me/applications/{application_id}/role-connection": {
        "put": {
            "description": "Updates and returns the application role connection for the user. Requires an OAuth2 access token with `role_connections.write` scope for the application specified in the path.",
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
                    }
                }
            }
        }
    },
    "/voice/regions": {
        "get": {
            "description": "Returns an array of voice region objects that can be used when setting a voice or stage channel's `rtc_region`.",
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
                    }
                }
            }
        }
    },
    "/channels/{channel_id}/webhooks": {
        "post": {
            "description": "Creates a new webhook and returns a webhook object on success. Requires the `MANAGE_WEBHOOKS` permission. Fires a Webhooks Update Gateway event.\r",
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
                    }
                }
            }
        },
        "get": {
            "description": "Returns a list of channel webhook objects. Requires the `MANAGE_WEBHOOKS` permission.",
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
                    }
                }
            }
        }
    },
    "/webhooks/{webhook_id}": {
        "get": {
            "description": "Returns the new webhook object for the given id.",
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
                    }
                }
            }
        },
        "patch": {
            "description": "Modify a webhook. Requires the `MANAGE_WEBHOOKS` permission. Returns the updated webhook object on success. Fires a Webhooks Update Gateway event.\r",
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
                    }
                }
            }
        }
    },
    "/webhooks/{webhook_id}/{webhook_token}": {
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
                    }
                }
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
                    }
                }
            }
        }
    },
    "/webhooks/{webhook_id}/{webhook_token}/messages/{message_id}": {
        "get": {
            "description": "Returns a previously-sent webhook message from the same token. Returns a message object on success.",
            "operationId": "getWebhooksMessage",
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
                    }
                }
            }
        },
        "patch": {
            "description": "Edits a previously-sent webhook message from the same token. Returns a message object on success.\r",
            "operationId": "patchWebhooksMessage",
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
                    }
                }
            }
        },
        "delete": {
            "description": "Deletes a message that was created by the webhook. Returns a `204 No Content` response on success.",
            "operationId": "deleteWebhooksMessage",
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
                    }
                }
            }
        }
    }
};
