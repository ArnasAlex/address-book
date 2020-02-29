import { UPDATE_NATIONALITY } from "../actionTypes";
import { SettingsState } from "../types";

const initialState = (): SettingsState => ({
  nationality: "CH"
});

export default function(state = initialState(), action): SettingsState {
  switch (action.type) {
    case UPDATE_NATIONALITY: {
      const { nationality } = action.payload;
      return {
        ...state,
        nationality
      };
    }

    default:
      return state;
  }
}
