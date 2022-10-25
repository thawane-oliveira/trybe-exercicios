const initialState = {
  clicks: 0,
  count: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'incrementCounter':
      return { 
        ...state,
        count: state.count + action.payload };
        case 'incrementClick':
          return {
            ...state,
            clicks: state.clicks + 1,
          }
    default:
      return state;
  }
}

export default counterReducer;
