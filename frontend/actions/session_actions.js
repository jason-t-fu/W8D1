import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: currentUser
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  };
};

export const clearErrors = errors => {
  return {
    type: CLEAR_ERRORS
  };
};

export const login = user => {
  return dispatch => {
    return SessionApiUtil.login(user).then( 
      (resUser) => {
        return dispatch(receiveCurrentUser(resUser));
      },
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};

export const logout = () => {
  return dispatch => {
    return SessionApiUtil.logout().then( 
      () => {
        return dispatch(logoutCurrentUser());
      },
      (errors) => {
        dispatch(receiveErrors(errors.responseJSON));
        return errors.responseJSON;
      }
    );
  };
};

export const signup = user => {
  return dispatch => {
    return SessionApiUtil.signup(user).then(
      (resUser) => {
        return dispatch(receiveCurrentUser(resUser));
      },
      (errors) => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};