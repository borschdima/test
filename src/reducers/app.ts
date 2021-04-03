import { TOGGLE_MODAL, UPDATE_SYYNONYMS } from '../actions/app';

type DefaultState = {
  synonyms: string[],
  isModalOpen: boolean,
};

export const defaultState: DefaultState = {
  synonyms: [],
  isModalOpen: true,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    case UPDATE_SYYNONYMS:
      return {
        ...state,
        synonyms: action.payload,
      };
    default:
      return state;
  }
};
