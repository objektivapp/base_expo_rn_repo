import { ADD_ACTION, SELECTED_ITEM, COMMIT_INPUT, DATE_INPUT, ASSETS_LOADED } from './actionTypes';

export const addAction = friendsIndex => (
  {
    type: ADD_ACTION,
    payload: friendsIndex
  }
);

export const onSelectItem = (item, isCompletedId) => (
  {
    type: SELECTED_ITEM,
    payload: item,
    payloadCompleted: isCompletedId
  }
);

export const onChangeInput = input => (
  {
    type: COMMIT_INPUT,
    payload: input
  }
);

export const onChangeDate = input => (
  {
    type: DATE_INPUT,
    payload: input
  }
);

export const onAssetsLoad = data => (
  {
    type: ASSETS_LOADED,
    payload: data
  }
);