import { forwardRef } from 'react';

import './BlackKey.css'

export const BlackKey = forwardRef(function (props, ref) {
  const { text, tabIndex, handleClick, onKeyDown, onBlur } = props;

  return (
    <button
      className="black-key"
      ref={ref}
      tabIndex={tabIndex}
      onClick={handleClick}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    >
      {text}
    </button>
  )
})