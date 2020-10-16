import { SET_SECTION, RESET_SECTION } from '../actionTypes/openSection'

export const setOpenSection = ( count ) => ({
  type: SET_SECTION,
  payload: { count },
})
export const resetSection = () => ({
  type: RESET_SECTION,
})
