import axios from 'axios';
import endpoints from '../utils/constants/endpoints';
const env = process.env.NODE_ENV || 'development';
const endpointURL = endpoints[env].auth;

// ACTION TYPES
const GET_USER = 'GET_USER';

// INITIAL STATE
const defaultUser = {};

// ACTION CREATORS
const getUser = user => ({ type: GET_USER, user });

// THUNK CREATORS
export const me = () => async dispatch => {
  try {
    const { data } = await axios.get(endpointURL + "me");
    dispatch(getUser(data || defaultUser));
  } catch (error) {
    //TODO: Make error handling action
    console.error(error);
  }
}

export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  }
}
