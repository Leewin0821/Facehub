import { FETCH_USER } from '../Actions/UserListAction'

export function userListReducer(state = [], action) {
  switch (action.type) {
    case FETCH_USER:
      return [...action.payload]
    default:
      return state
  }
}
