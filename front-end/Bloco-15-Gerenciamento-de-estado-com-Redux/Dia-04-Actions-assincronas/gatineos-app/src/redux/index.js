// .src/redux/index.js
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import gallery from './reducers/gallery';

const store = createStore(
  gallery,
  applyMiddleware(thunk),
);

export default store;