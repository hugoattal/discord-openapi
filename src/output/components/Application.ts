export const Application = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "description": "the id of the app"
        },
        "name": {
            "type": "string",
            "description": "the name of the app"
        },
        "icon": {
            "type": "string",
            "description": "the [icon hash](#DOCS_REFERENCE/image-formatting) of the app"
        },
        "description": {
            "type": "string",
            "description": "the description of the app"
        },
        "rpc_origins": {
            "type": "array of strings",
            "description": "an array of rpc origin urls, if rpc is enabled"
        },
        "bot_public": {
            "type": "boolean",
            "description": "when false only app owner can join the app's bot to guilds"
        },
        "bot_require_code_grant": {
            "type": "boolean",
            "description": "when true the app's bot will only join upon completion of the full oauth2 code grant flow"
        },
        "terms_of_service_url": {
            "type": "string",
            "description": "the url of the app's terms of service"
        },
        "privacy_policy_url": {
            "type": "string",
            "description": "the url of the app's privacy policy"
        },
        "owner": {
            "$ref": "User",
            "description": "partial user object containing info on the owner of the application"
        },
        "verify_key": {
            "type": "string",
            "description": "the hex encoded key for verification in interactions and the GameSDK's [GetTicket](#DOCS_GAME_SDK_APPLICATIONS/getticket)"
        },
        "team": {
            "$ref": "DataModelsTeam",
            "description": "if the application belongs to a team, this will be a list of the members of that team"
        },
        "guild_id": {
            "type": "string",
            "description": "if this application is a game sold on Discord, this field will be the guild to which it has been linked"
        },
        "primary_sku_id": {
            "type": "string",
            "description": "if this application is a game sold on Discord, this field will be the id of the \"Game SKU\" that is created, if exists"
        },
        "slug": {
            "type": "string",
            "description": "if this application is a game sold on Discord, this field will be the URL slug that links to the store page"
        },
        "cover_image": {
            "type": "string",
            "description": "the application's default rich presence invite [cover image hash](#DOCS_REFERENCE/image-formatting)"
        },
        "flags": {
            "type": "integer",
            "description": "the application's public [flags](#DOCS_RESOURCES_APPLICATION/application-object-application-flags)"
        },
        "tags": {
            "type": "array of strings",
            "description": "up to 5 tags describing the content and functionality of the application"
        },
        "install_params": {
            "$ref": "InstallParams",
            "description": "settings for the application's default in-app authorization link, if enabled"
        },
        "custom_install_url": {
            "type": "string",
            "description": "the application's default custom authorization link, if enabled"
        },
        "role_connections_verification_url": {
            "type": "string",
            "description": "the application's role connection verification entry point, which when configured will render the app as a verification method in the guild role verification configuration"
        }
    },
    "required": [
        "id",
        "name",
        "icon",
        "description",
        "bot_public",
        "bot_require_code_grant",
        "verify_key",
        "team"
    ]
}