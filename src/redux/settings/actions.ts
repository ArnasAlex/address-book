import { UPDATE_NATIONALITY } from "../actionTypes";

export const updateNationality = nationality => ({
  type: UPDATE_NATIONALITY,
  payload: { nationality }
});
