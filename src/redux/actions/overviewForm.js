import { ADD_OVERVIEW_FORMTDATA, RESET_OVERVIEW_FORMTDATA } from '../actionTypes/overviewForm'

export const setOverviewFormdata = (message, date) => ({
  type: ADD_OVERVIEW_FORMTDATA,
  payload: { message, date },
})
export const resetOverviewFormdata = () => ({
         type: RESET_OVERVIEW_FORMTDATA,
       })
