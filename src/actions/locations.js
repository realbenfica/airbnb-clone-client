import * as request from 'superagent'
import { baseUrl } from '../constants'
import { logout } from './users'
import { isExpired } from '../jwt'

export const ADD_LOCATION = 'ADD_LOCATION'
export const UPDATE_LOCATIONS = 'UPDATE_LOCATIONS'
export const GET_LOCATION = 'GET_LOCATION'


const updateLocations = locations => ({
  type: UPDATE_LOCATIONS,
  locations
})

const addLocation = location => ({
  type: ADD_LOCATION,
  location
})

const updateLocation = location => ({
  type: GET_LOCATION,
  location
})

export const getLocations = () => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  request
    .get(`${baseUrl}/locations`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch(updateLocations(result.body))
    })
    .catch(err => console.error(err))
}

export const getLocation = locationId => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  request
    .get(`${baseUrl}/locations/${locationId}`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(result => {
      dispatch(updateLocation(result.body))
    })
    .catch(err => alert(err))
}

export const createLocation = (data) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  request
    .post(`${baseUrl}/locations`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(data)
    .then(result => dispatch(addLocation(data)))
    .catch(err => console.error(err))
}


