import React, { useEffect } from 'react';
import BenchIndexItem from './bench_index_item';

function BenchIndex(props) {
  useEffect(() => {
    props.fetchBenches();
  }, []);

  return (
    <div>
      {props.benches.map(bench => {
        return <BenchIndexItem key={bench.id} bench={bench} />
      })}
    </div>
  )
}

export default BenchIndex;