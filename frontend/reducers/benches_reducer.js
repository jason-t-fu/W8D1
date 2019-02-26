import { RECEIVE_BENCHES } from '../actions/bench_actions';

const _nullBenches = {};

const benchesReducer = (state = _nullBenches, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BENCHES:
      return action.benches;
    default:
      return state;
  }
};

export default benchesReducer;