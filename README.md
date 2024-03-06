# OAuth 2.0 Client Package

## Description

This is a simple OAuth 2.0 Client package in JavaScript, designed to facilitate the authentication process with an OAuth 2.0 provider. It supports the password and refresh token grant types.

## Installation

Before using this package, ensure you have the `axios` library installed. You can install it using the following command:

```bash
npm install axios
npm install oauth-client-package

## USAGE
const OAuthClient = require('oauth-client-package');

// Create an instance of the OAuthClient with your OAuth 2.0 credentials and token endpoint.
const oauthClient = new OAuthClient({
  clientId: 'your_client_id',
  clientSecret: 'your_client_secret',
  tokenEndpoint: 'https://example.com/token',
});

// Example usage for obtaining an access token using the password grant type:
const username = 'user@example.com';
const password = 'user_password';

oauthClient.getAccessToken(username, password)
  .then((accessToken) => {
    console.log('Access Token:', accessToken);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

// Example usage for refreshing an access token using the refresh token grant type:
const refreshToken = 'your_refresh_token';

oauthClient.refreshToken(refreshToken)
  .then((accessToken) => {
    console.log('Refreshed Access Token:', accessToken);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

## Configuration

    clientId: Your OAuth 2.0 client ID.
    clientSecret: Your OAuth 2.0 client secret.
    tokenEndpoint: The token endpoint URL provided by your OAuth 2.0 provider.