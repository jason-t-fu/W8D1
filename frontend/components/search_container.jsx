import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';
import Search from './search';

const mapStateToProps = state => {
  return {
    benches: Object.values(state.entities.benches)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBenches: benches => dispatch(fetchBenches(benches))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);