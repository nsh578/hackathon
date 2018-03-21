import axios from 'axios';

import config from '../config';
import client from './stream';

import type { fetchFeedArgType } from '../constants/babelTypes';

export const loginRequest = credentials => ({
  method: 'Post',
  url: `${config.apiUrl}/auth/login`,
  data: credentials,
  transformResponse: axios.defaults.transformResponse.concat((data, headers) => {
    if (!data.username) return data;
    return {
      password: credentials.password,
      token: headers['x-auth'],
      ...data,
    };
  }),
});

export const signupRequest = userData => ({
  method: 'Post',
  url: `${config.apiUrl}/users`,
  data: userData,
  transformResponse: axios.defaults.transformResponse.concat((data, headers) => {
    if (!data.username) return data;
    return {
      password: userData.password,
      token: headers['x-auth'],
      ...data,
    };
  }),
});

export const streamTokenRequest = ({ artistUsername, user }: fetchFeedArgType) => {
  let uri;
  let type;
  if (artistUsername) {
    type = 'fan';
    uri = `/feed/fan/${artistUsername}`;
  } else {
    type = 'artist';
    uri = '/feed/artist';
  }
  return {
    method: 'Get',
    url: config.apiUrl + uri,
    headers: user ? { 'x-auth': user.token } : {},
    transformResponse: axios.defaults.transformResponse.concat((data, headers) => {
      if (!headers['stream-auth']) return data;
      const stream = client.feed(
        type,
        artistUsername || user.username,
        headers['stream-auth']
      );
      return { stream, ...data };
    }),
  };
};
