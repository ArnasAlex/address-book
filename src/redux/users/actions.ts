import {
  CLOSE_USER,
  FETCH_USERS,
  LOAD_USERS,
  OPEN_USER,
  UPDATE_USERS_CURSOR,
  UPDATE_USERS_PAGE,
  USERS_FETCHED
} from "../actionTypes";

export const loadUsers = () => ({
  type: LOAD_USERS,
  payload: {}
});

export const fetchUsers = () => ({
  type: FETCH_USERS,
  payload: {}
});

export const usersFetched = users => ({
  type: USERS_FETCHED,
  payload: { users }
});

export const updateUsersCursor = cursor => ({
  type: UPDATE_USERS_CURSOR,
  payload: { cursor }
});

export const updateUsersPage = pageNr => ({
  type: UPDATE_USERS_PAGE,
  payload: { pageNr }
});

export const openUser = email => ({
  type: OPEN_USER,
  payload: { email }
});

export const closeUser = () => ({
  type: CLOSE_USER,
  payload: {}
});
