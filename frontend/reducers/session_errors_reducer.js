import { RECEIVE_ERRORS, 
         RECEIVE_CURRENT_USER,
         CLEAR_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullErrors = [];

const sessionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    case RECEIVE_ERRORS:
      return merge([], state, action.errors);
    case CLEAR_ERRORS:
      return _nullErrors;
    default: 
      return _nullErrors;
  }
};

export default sessionErrorsReducer;