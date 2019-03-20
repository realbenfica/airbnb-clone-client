import * as request from 'superagent'
import { baseUrl } from '../constants'
import { logout } from './users'
import { isExpired } from '../jwt'

export const ADD_HOME = 'ADD_HOME'
export const UPDATE_HOMES = 'UPDATE_HOMES'
export const GET_HOME = 'GET_HOME'

const updateHomes = homes => ({
  type: UPDATE_HOMES,
  homes
})

const addHome = home => ({
  type: ADD_HOME,
  home
})

const findHome = home => ({
  type: GET_HOME,
  home
})

export const getHomes = () => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  request
    .get(`${baseUrl}/homes`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch(updateHomes(result.body))
    })
    .catch(err => console.error(err))
}

export const getHome = homeId => (dispatch, getState) => {
  const state = getState()
  if (!state.currentUser) return null
  const jwt = state.currentUser.jwt
  if (isExpired(jwt)) return dispatch(logout())
  request
    .get(`${baseUrl}/homes/${homeId}`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(result => {
      dispatch(findHome(result.body))
    })
    .catch(err => alert(err))
}

export const createHome = home => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  if (isExpired(jwt)) return dispatch(logout())
  request
    .post(`${baseUrl}/homes`)
    .set("Authorization", `Bearer ${jwt}`)
    .send({
      author: home.authorName,
      description: home.description,
      price: home.price,
      picture: home.picture,
      locationId: home.locationId
    })
    .then(result => {
      dispatch(addHome(result.body))
    })
    .catch(err => console.error(err))
}