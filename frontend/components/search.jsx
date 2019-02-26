import React from 'react';
import BenchMap from './benches/bench_map';
import BenchIndex from './benches/bench_index';

const Search = props => {
  return (
    <div>
      <BenchMap {...props} />
      <BenchIndex {...props}/>
    </div>
  );
}

export default Search;