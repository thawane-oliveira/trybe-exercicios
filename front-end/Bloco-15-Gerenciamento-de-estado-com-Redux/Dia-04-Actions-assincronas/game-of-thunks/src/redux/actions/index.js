export const request = () => (
  { type: 'REQUEST' }
);

export const accomplished = (character) => (
  { type: 'SUCCESS', character }
);

export const wentWrong = (error) => (
  { type: 'ERROR', error }
);

export function thunkRequestCharacter(searchValue) {
  return async (dispatch) => {
    try {
      dispatch(request());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${searchValue}`)
      const data = await response.json();
      dispatch(accomplished(data))
    } catch (error) {
      dispatch(wentWrong(error))
    }
  };
};