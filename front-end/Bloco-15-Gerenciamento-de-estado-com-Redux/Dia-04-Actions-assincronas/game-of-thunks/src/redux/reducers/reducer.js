const INITIAL_STATE = {
  character: '',
  isLoading: false,
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST':
      return {
        ...state,
        isLoading: true,
      }
      case 'SUCCESS':
        return {
         ...state,
         isLoading: false,
         character: action.character[0],
        }
      case 'ERROR':
        return {
          ...state,
          isLoading: false,
          error: action.error,
                    }
        default: 
          return state
  }
}

export default reducer;
