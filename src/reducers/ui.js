const defaultState = {
  title: 'Songs'
}

export const ui = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_HEADER_TITLE':
      return {
        ...state,
        title: action.title
      }

    default:
      return state
  }
}

export default ui
