import _ from 'lodash';

export type userType = {
  isArtist: boolean,
  username: string,
  email: string,
  password: string,
  following: Array,
  followers: Array,
  token: string,
  firstName: string | null,
  lastName: string | null,
  phoneNumber: number | null,
}

export const toUserType = (obj):userType => {
  const user = _.pick(obj, [
    'isArtist',
    'username',
    'email',
    'password',
    'following',
    'followers',
    'token',
    'firstName',
    'lastName',
    'phoneNumber',
  ]);
  user.following = user.following || [];
  user.followers = user.followers || [];
  user.isArtist = user.isArtist || false;
  return user;
}

export type postType = {
  _id: string,
  _cached: bool,
  artistPost: bool,
  authorUsername: string,
  timestamp: string,
  location: string | null,
  content: string | null,
}


export type fetchArtistFeedArgType = { user: userType };
export type fetchFanFeedArgType = { artistUsername: string }
export type fetchFeedArgType = fetchArtistFeedArgType | fetchFanFeedArgType;
