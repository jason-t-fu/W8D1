import React from 'react';
import ReactDOM from 'react-dom';
// import * as SessionActions from './actions/session_actions';
// import { fetchBenches } from './util/bench_api_util';
import { fetchBenches } from './actions/bench_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser}
      },
      session: {id: window.currentUser.id},
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  }
  else {
    store = configureStore();
  }
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  window.fetchBenches = fetchBenches;
  // window.SessionActions = SessionActions;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});