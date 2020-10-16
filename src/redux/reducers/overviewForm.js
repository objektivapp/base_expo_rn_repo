import { ADD_OVERVIEW_FORMTDATA, RESET_OVERVIEW_FORMTDATA } from '../actionTypes/overviewForm'
import moment from 'moment'

const initialState = {
  message: '',
  date: moment(new Date()).format('DD/MM/YYYY'),
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_OVERVIEW_FORMTDATA:
      return {
        ...state,
        message: action.payload.message,
        date: action.payload.date,
      }

    case RESET_OVERVIEW_FORMTDATA:
      return initialState

    default:
      return state
  }
}
