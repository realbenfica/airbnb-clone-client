import { ADD_HOME, GET_HOME } from '../actions/homes'

export default function (state = null, action) {
  switch (action.type) {
    case GET_HOME:
      return action.home


    case ADD_HOME:
      return [action.home, ...state]

    default:
      return state
  }
}