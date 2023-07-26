const initialState = {
  isNightMode: false,
};

const nightModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_NIGHT_MODE':
      return {
        ...state,
        isNightMode: !state.isNightMode,
      };
    default:
      return state;
  }
};

export default nightModeReducer;
