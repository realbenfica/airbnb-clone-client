import { GET_LOCATION } from '../actions/locations'

const location = {}

export default function(state = location, action) {
  switch (action.type) {
    case GET_LOCATION:
      return action.payload

    default:
      return state
  }
}