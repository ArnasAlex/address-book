import { createLogic } from "redux-logic";
import * as usersApi from "../../api/users";
import { MAX_USER_COUNT, USER_PAGE_SIZE } from "../../constans";
import { FETCH_USERS, LOAD_USERS } from "../actionTypes";
import { State } from "../types";
import {
  fetchUsers,
  updateUsersCursor,
  updateUsersPage,
  usersFetched
} from "./actions";

const INITIAL_IDLE = 1000;

export function loadUsersLogic(getState, done, dispatch) {
  const state = getState() as State;
  const { list, cursor } = state.users;
  if (cursor >= MAX_USER_COUNT) {
    done();
    return;
  }

  dispatch(updateUsersCursor(cursor + USER_PAGE_SIZE));
  dispatch(fetchUsers());

  const userCount = list.length;
  const initialLoad = userCount === 0;
  if (initialLoad) {
    setTimeout(() => {
      dispatch(fetchUsers());
      done();
    }, INITIAL_IDLE);
    return;
  }

  done();
}

export async function fetchUsersLogic(getState, done, dispatch) {
  const state = getState() as State;
  const { list, pageNr } = state.users;
  if (list.length >= MAX_USER_COUNT) {
    done();
    return;
  }

  dispatch(updateUsersPage(pageNr + 1));

  try {
    const users = await usersApi.getUsers({
      pageSize: USER_PAGE_SIZE,
      pageNr,
      nationality: state.settings.nationality
    });

    await dispatch(usersFetched(users));
  } catch (err) {
    // TODO: Add proper error handling
    console.log("Error on getUsers: " + err);
  } finally {
    done();
  }
}

const loadUsersLogicConfig = createLogic({
  type: LOAD_USERS,
  async process({ getState }, dispatch, done) {
    return loadUsersLogic(getState, done, dispatch);
  }
});

const fetchUsersLogicConfig = createLogic({
  type: FETCH_USERS,
  async process({ getState }, dispatch, done) {
    return fetchUsersLogic(getState, done, dispatch);
  }
});

export default [loadUsersLogicConfig, fetchUsersLogicConfig];
