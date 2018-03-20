export type userType = {
  isArtist: boolean,
  username: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  phoneNumber: number | null,
  token: string,
}

export const toUserType = ({
  isArtist,
  username,
  email,
  password,
  firstName,
  lastName,
  phoneNumber,
  token,
}):userType => {
  if (!password
     || !username
     || !email
     || !firstName
     || !lastName
     || !token) throw TypeError('Cannot cast object to userType');
  return {
    token,
    username,
    email,
    password,
    firstName,
    lastName,
    isArtist: isArtist || false,
    phoneNumber: phoneNumber || null,
  };
}

export type fetchArtistFeedArgType = { user: userType };
export type fetchFanFeedArgType = { artistUsername: string }
export type fetchFeedArgType = fetchArtistFeedArgType | fetchFanFeedArgType;
