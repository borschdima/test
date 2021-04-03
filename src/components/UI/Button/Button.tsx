import React from 'react';

import './Button.scss';

type ButtonProps = {
  children: any,
  onClick?: () => void,
  disabled?: boolean,
  className?: string,
  type?: 'button' | 'submit' | 'reset' | undefined,
  variant?: 'primary' | 'success' | 'danger' | undefined,
};

const Button = (props: ButtonProps) => {
  const {
    children, disabled, type, className, variant, onClick,
  } = props;

  const classes = `btn ${className ?? ''} ${variant ? `btn-${variant}` : 'btn-primary'}`;

  return (
    <button
      type={type ?? 'button'}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
