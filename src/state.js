import { createStore } from 'redux';

export const SET_CONTENT = 'SET_CONTENT';

export function setContent(content, copySuccess) {
  return { type: SET_CONTENT, content, copySuccess };
}

export function reducer(state = {
    content: '',
    copySuccess: false,
  }, action) {
  switch (action.type) {
    case SET_CONTENT:
      return Object.assign({}, state, {
        content: action.content,
        copySuccess: action.copySuccess,
      });
    default:
      return state
  }
}

export const store = createStore(reducer);
