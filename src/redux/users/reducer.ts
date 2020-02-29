import {
  CLOSE_USER,
  OPEN_USER,
  UPDATE_NATIONALITY,
  UPDATE_USERS_CURSOR,
  UPDATE_USERS_PAGE,
  USERS_FETCHED
} from "../actionTypes";
import { UserState } from "../types";

const initialState = (): UserState => ({
  list: [],
  cursor: 0,
  pageNr: 0
});

export default function(state = initialState(), action): UserState {
  switch (action.type) {
    case USERS_FETCHED: {
      const { users } = action.payload;
      return {
        ...state,
        list: [...state.list, ...users]
      };
    }

    case UPDATE_USERS_CURSOR: {
      const { cursor } = action.payload;
      return {
        ...state,
        cursor
      };
    }

    case UPDATE_USERS_PAGE: {
      const { pageNr } = action.payload;
      return {
        ...state,
        pageNr
      };
    }

    case OPEN_USER: {
      const { email } = action.payload;
      return {
        ...state,
        user: state.list.find(u => u.email === email)
      };
    }

    case CLOSE_USER: {
      return {
        ...state,
        user: undefined
      };
    }

    case UPDATE_NATIONALITY: {
      return initialState();
    }

    default:
      return state;
  }
}
