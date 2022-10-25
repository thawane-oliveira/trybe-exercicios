// ./src/redux/reducers/counterReducer.js
const initialState = {
  count: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'incrementCounter':
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counterReducer;
