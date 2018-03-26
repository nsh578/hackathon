import axios from 'axios';

import config from '../config';

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
  if (artistUsername) {
    uri = `/feed/fan/${artistUsername}`;
  } else {
    uri = '/feed/artist';
  }
  return {
    method: 'Get',
    url: config.apiUrl + uri,
    headers: user ? { 'x-auth': user.token } : {},
    transformResponse: axios.defaults.transformResponse.concat((data, headers) => {
      if (!headers['stream-auth']) return data;
      return { streamToken: headers['stream-auth'] };
    }),
  };
};

export const fetchPostRequest = (user: userType, postId) => ({
  method: 'GET',
  url: `${config.apiUrl}/posts/${postId}`,
  headers: { 'x-auth': user.token },
  transformResponse:
    axios.defaults.transformResponse.concat(data => ({
      _id: data._id,
      _cached: true,
      authorUsername: data.author,
      timestamp: new Date(data.createdAt),
      artistPost: data.byArtist,
      content: data.text,
    })),
});

export const createPostRequest = (user: userType, stream, post: postType) => ({
  method: 'POST',
  url: `${config.apiUrl}/posts/${
    stream.slug === 'artist' ? 'artist' : stream.feedUrl}`,
  headers: { 'x-auth': user.token },
  data: post,
});
