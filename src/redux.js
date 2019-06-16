import { createStore } from "redux";

export const MENU = menu => ({
  type: MENU,
  menu: menu
});

export const SCROLL = scroll => ({
  type: SCROLL,
  scroll: scroll
});

const initialState = {
  menu: false,
  scroll: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU:
      return (
        Object.assign({}, state),
        {
          ...state,
          menu: action.menu
        }
      );
    case SCROLL:
      return (
        Object.assign({}, state),
        {
          ...state,
          scroll: action.scroll
        }
      );
    default:
      return state;
  }
};

export function configureStore(initialState) {
  const store = createStore(loginReducer, initialState);
  return store;
}

export const store = configureStore(initialState);
