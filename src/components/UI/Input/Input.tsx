import React from 'react';

import { ReactComponent as ErrorSVG } from '../../../static/icons/error.svg';

import './Input.scss';

type InputProps = {
  onChange: (value: string) => void;
  value: string,
  name?: string,
  placeholder?: string,
  className?: string,
  errorMessage?: string,
};

const Input = (props: InputProps) => {
  const {
    className, value, errorMessage, onChange, ...rest
  } = props;

  const classes = `input ${className ?? ''}`;

  return (
    <div className={classes}>
      <input
        className="input__field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      />
      {errorMessage && (
        <div className="input__error">
          <ErrorSVG />
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Input;
