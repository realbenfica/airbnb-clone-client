import { UPDATE_HOMES } from '../actions/homes'

export default function (state = null, action) {
  switch (action.type) {
    
    case UPDATE_HOMES:
      return action.homes

    default:
      return state
  }
}