import { forwardRef } from 'react';

import './WhiteKey.css'

export const WhiteKey = forwardRef(function (props, ref) {
  const { text, tabIndex, handleClick, onKeyDown, onBlur } = props;

  return (
    <button
      className="white-key"
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