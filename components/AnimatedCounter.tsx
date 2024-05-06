import React from 'react';
import Countup from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
      <Countup
        end={amount}
        duration={1}
        prefix='NOK'
        decimal=','
        decimals={2}
      />
    </div>
  );
};

export default AnimatedCounter;
