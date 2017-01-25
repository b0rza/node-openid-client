module.exports = {

  // =============================================
  // ONCOURSE STATIC CLIENT
  // =============================================
  oncourse: {
    registration: {
      grant_types: ['authorization_code'],
      response_types: ['code'],
    },
    keystore: undefined,
    authorization_params: {
      scope: 'openid phone',
    },
    metadata: {
      "application_type": "web",
      "client_id": "229aabc0a853740618fcd3855bec1963_oncourse_dev",
      "client_name": "oncourse_dev",
      "client_secret": "3730222a6d2001619369dece495d7fed2bf713aac3e6bf07bd713f07c6698835b133f9a76a4a40b240c4ccb60e3fc0216e1f53fbc5c1d78011a030cb044e1886",
      "client_secret_expires_at": 0,
      "grant_types": [
          "authorization_code"
      ],
      "id_token_signed_response_alg": "RS256",
      "post_logout_redirect_uris": [
          "http://openid.client.local:3001/"
      ],
      "redirect_uris": [
          "http://openid.client.local:3001/cb"
      ],
      "require_auth_time": false,
      "response_types": [
          "code"
      ],
      "subject_type": "public",
      "token_endpoint_auth_method": "client_secret_basic"
    }
  },

  basic: {
    registration: {
      grant_types: ['authorization_code'],
      response_types: ['code'],
    },
    keystore: undefined,
    authorization_params: {
      scope: 'openid phone',
    },
  },

  with_refresh: {
    registration: {
      grant_types: ['authorization_code', 'refresh_token'],
      response_types: ['code'],
    },
    keystore: undefined,
    authorization_params: {
      scope: 'openid phone offline_access',
      prompt: 'consent',
    },
  },
  implicit: {
    registration: {
      grant_types: ['implicit'],
      response_types: ['id_token'],
    },
    keystore: undefined,
    authorization_params: {
      scope: 'openid',
      response_type: 'id_token',
      response_mode: 'form_post',
      claims: { id_token: { email_verified: null } },
    },
  },
  hybrid: {
    registration: {
      grant_types: ['authorization_code', 'implicit'],
      response_types: ['code id_token'],
    },
    keystore: undefined,
    authorization_params: {
      scope: 'openid',
      response_type: 'code id_token',
      response_mode: 'form_post',
    },
  },
  auth_private_key_jwt: {
    registration: {
      grant_types: ['authorization_code'],
      response_types: ['code'],
      token_endpoint_auth_method: 'private_key_jwt',
      token_endpoint_auth_signing_alg: 'ES256',
    },
    keystore: ['EC', 'P-256'],
  },
  auth_client_secret_jwt: {
    registration: {
      grant_types: ['authorization_code'],
      response_types: ['code'],
      token_endpoint_auth_method: 'client_secret_jwt',
      token_endpoint_auth_signing_alg: 'HS512',
    },
  },
  id_token_encrypted: {
    registration: {
      grant_types: ['authorization_code'],
      response_types: ['code'],
      id_token_encrypted_response_alg: 'RSA1_5',
    },
    keystore: ['RSA', 2048],
  },
  userinfo_signed: {
    registration: {
      grant_types: ['authorization_code'],
      response_types: ['code'],
      userinfo_signed_response_alg: 'RS256',
    },
  },
  userinfo_signed_encrypted: {
    registration: {
      grant_types: ['authorization_code'],
      response_types: ['code'],
      userinfo_encrypted_response_alg: 'ECDH-ES+A128KW',
      userinfo_signed_response_alg: 'RS256',
    },
    keystore: ['EC', 'P-256'],
  },
  userinfo_not_signed_but_encrypted: {
    registration: {
      grant_types: ['authorization_code'],
      response_types: ['code'],
      userinfo_encrypted_response_alg: 'ECDH-ES+A128KW',
    },
    keystore: ['EC', 'P-256'],
  },
};
