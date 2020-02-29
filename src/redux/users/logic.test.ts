import { State, User } from "../types";
import { loadUsersLogic } from "./logic";

describe("Users logic", () => {
  describe("loadUsersLogic", () => {
    it("dispatches UPDATE_USERS_CURSOR action with page size", () => {
      const getState = () =>
        ({ users: { list: [{} as User], cursor: 0 } } as State);
      const done = jest.fn();
      const dispatch = jest.fn();

      loadUsersLogic(getState, done, dispatch);

      expect(dispatch).toBeCalledWith({
        type: "UPDATE_USERS_CURSOR",
        payload: { cursor: 50 }
      });
    });

    it("doest not dispatch UPDATE_USERS_CURSOR when cursor reached max count", () => {
      const getState = () =>
        ({ users: { list: [{} as User], cursor: 1000 } } as State);
      const done = jest.fn();
      const dispatch = jest.fn();

      loadUsersLogic(getState, done, dispatch);

      expect(dispatch).not.toBeCalledWith({ type: "FETCH_USERS", payload: {} });
    });
  });
});
