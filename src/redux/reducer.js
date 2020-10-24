import { combineReducers } from 'redux';
import { ADD_ACTION, SELECTED_ITEM, COMMIT_INPUT, DATE_INPUT, ASSETS_LOADED } from './actionTypes';

const INITIAL_STATE = {
  current: [],
  possible: [
    { id: 1, name: '20 situps', duration: 'Mo, Wed' },
    { id: 2, name: 'Lorem ipsum dolor sit', duration: 'Every day' },
  ],
  selectedItem: 1,
  commitInput: '',
  date: null,
  isCompletedId: null,
  assetsLoaded: false
};

const friendsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ACTION:
      // Pulls current and possible out of previous state
      // We do not want to alter state directly in case
      // another action is altering it at the same time
      const {
        current,
        possible
      } = state;

      const addnewAction = { id: parseInt(possible.length + 1), name: 'add ' + parseInt(possible.length + 1), duration: 'duration ' + parseInt(possible.length + 1) + ' days' }
      const addedFriend = possible.push(addnewAction);
      current.push(addedFriend);

      // Finally, update the redux state
      const newState = {...state, current, possible, selectedItem: 2 };

      return newState;

    case SELECTED_ITEM:
      return { ...state, selectedItem: action.payload,  isCompletedId: action.payloadCompleted };

    case COMMIT_INPUT:
      return { ...state, commitInput: action.payload };

    case DATE_INPUT:
      return { ...state, date: action.payload };

    case ASSETS_LOADED:
      return { ...state, assetsLoaded: action.payload };

    default:
      return state
  }
};

export default combineReducers({
  friends: friendsReducer,
});