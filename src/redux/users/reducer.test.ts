import { UPDATE_USERS_PAGE } from "../actionTypes";
import reducer from "./reducer";

describe("Users reducer", () => {
  it("initializes with default state", () => {
    const state = reducer(undefined, { type: undefined });

    expect(state).toEqual({ list: [], cursor: 0, pageNr: 0 });
  });

  it("updates state when UPDATE_USERS_PAGE action executed", () => {
    const state = reducer(undefined, {
      type: UPDATE_USERS_PAGE,
      payload: { pageNr: 8 }
    });

    expect(state.pageNr).toBe(8);
  });
});
