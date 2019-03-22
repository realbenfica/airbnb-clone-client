import { ADD_LOCATION, UPDATE_LOCATIONS } from '../actions/locations'
import { USER_LOGOUT } from '../actions/users'

export default (state = null, action) => {
  switch (action.type) {
    case USER_LOGOUT:
      return null

    case ADD_LOCATION:
      return [action.location, ...state]

    case UPDATE_LOCATIONS:
      return action.locations

    default:
      return state
  }
}
