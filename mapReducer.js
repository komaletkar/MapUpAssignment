// mapReducer.js
const initialState = {
  region: null,
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REGION':
      return {
        ...state,
        region: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
