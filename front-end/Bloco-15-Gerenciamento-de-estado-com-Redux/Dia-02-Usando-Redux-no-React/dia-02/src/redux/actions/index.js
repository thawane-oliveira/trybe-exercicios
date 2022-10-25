export const actionCreator = (increment = 1) => ({
  type: 'incrementCounter',
  payload: increment,
});