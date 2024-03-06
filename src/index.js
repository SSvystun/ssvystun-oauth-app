const axios = require('axios');

class OAuthClient {
  constructor(options) {
    this.clientId = options.clientId;
    this.clientSecret = options.clientSecret;
    this.tokenEndpoint = options.tokenEndpoint;
  }

  async getAccessToken(username, password, scope = 'read') {
    try {
      const response = await axios.post(this.tokenEndpoint, {
        grant_type: 'password',
        client_id: this.clientId,
        client_secret: this.clientSecret,
        username: username,
        password: password,
        scope: scope,
      });

      return response.data.access_token;
    } catch (error) {
      throw new Error('Error fetching access token: ' + error.message);
    }
  }

  async refreshToken(refreshToken, scope = 'read') {
    try {
      const response = await axios.post(this.tokenEndpoint, {
        grant_type: 'refresh_token',
        client_id: this.clientId,
        client_secret: this.clientSecret,
        refresh_token: refreshToken,
        scope: scope,
      });

      return response.data.access_token;
    } catch (error) {
      throw new Error('Error refreshing token: ' + error.message);
    }
  }
}

// Example usage:
// const oauthClient = new OAuthClient({
//   clientId: 'your_client_id',
//   clientSecret: 'your_client_secret',
//   tokenEndpoint: 'https://example.com/token',
// });
//
// const username = 'user@example.com';
// const password = 'user_password';
//
// oauthClient.getAccessToken(username, password)
//   .then((accessToken) => {
//     console.log('Access Token:', accessToken);
//   })
//   .catch((error) => {
//     console.error('Error:', error.message);
//   });

module.exports = OAuthClient;