import { SET_SECTION, RESET_SECTION } from '../actionTypes/openSection'

const initialState = 0

export default function (state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case SET_SECTION:
      return action.payload.count

    case RESET_SECTION:
      return initialState

    default:
      return state
  }
}
