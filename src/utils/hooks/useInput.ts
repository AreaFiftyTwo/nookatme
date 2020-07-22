import { useState } from 'react';
import { UseInput } from '../types';

const useInput = (initialValue: string): UseInput => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      },
    },
  };
};

export default useInput;
