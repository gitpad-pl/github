# Github authorisation

## Examples, how to autorise app
https://auth0.com/docs/connections/social/github
https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/

    curl -u "tom-sapletta-com" https://api.github.com

### Login from console, using basic auth

    curl -i https://api.github.com -u config.service.github.user:config.service.github.pass

## Config file
    config.service.github.client_id
    config.service.github.client_secret
