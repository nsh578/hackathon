import axios from 'axios';

import config from '../config';
import client from './stream';

import type { userType, postType, fetchFeedArgType } from '../constants/babelTypes';

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

export const fetchPostRequest = (user: userType, postId) => ({
  method: 'GET',
  url: `${__CONFIG__.apiUrl}/posts/${postId}`,
  headers: { 'x-auth': user.token },
  transformResponse:
    axios.defaults.transformResponse.concat(data => ({
      _id: data._id,
      _cached: true,
      authorUsername: data.author,
      timestamp: data.createdAt,
      artistPost: data.byArtist,
      content: data.text,
    })),
});

export const createPostRequest = (user: userType, stream, post: postType) => ({
  method: 'POST',
  url: `${__CONFIG__.apiUrl}/posts/${
    stream.slug === 'artist' ? 'artist' : stream.feedUrl}`,
  headers: { 'x-auth': user.token },
  data: post,
});
