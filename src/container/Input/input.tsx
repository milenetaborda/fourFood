import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { InpuSignup } from '../../models/dataForm';

function Input({ name, ...rest }: InpuSignup): JSX.Element {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <input ref={inputRef} {...rest} />
      {error && <span>{error}</span>}
    </div>
  );
}

export default Input;
