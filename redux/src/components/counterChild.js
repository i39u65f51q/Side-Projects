import DoubleChild from './DoubleChild';

import React from 'react';

const CounterChild = prop => {
  console.log('CounterChild: Start');
  console.log('CounterChild: End');
  return (
    <div>
      Hi
      <DoubleChild />
    </div>
  );
};
export default React.memo(CounterChild);
// export default CounterChild;
