import * as Tone from 'tone'
import { useEffect, useRef } from 'react';

import './WhiteKey.css'

export function WhiteKey() {
  const synth = new Tone.Synth().toDestination();
  const keyRef = useRef(null);

  const keys = {
    'q': () => synth.triggerAttackRelease("C3", "1n"),
    'w': () => synth.triggerAttackRelease("D3", "2n")
  }

  useEffect(() => {
    keyRef.current.focus();
  }, [])

  function keyPress(event) {
    if (keys.hasOwnProperty(event.key)) {
      const currentKey = keys[event.key];
      currentKey();
    }

    return
  }

  return (
    <div className="piano-white-keys flex">
      <button
        className="white-key"
        ref={keyRef}
        tabIndex={1}
        onKeyDown={keyPress}
        onBlur={() => keyRef.current.focus()}
      >
        Q
      </button>
      <button
        className="white-key"
        tabIndex={2}
        ref={keyRef}
        onKeyDown={keyPress}
        onBlur={() => keyRef.current.focus()}
      >
        W
      </button>
      <div className="white-key">E</div>
      <div className="white-key">R</div>
      <div className="white-key">T</div>
      <div className="white-key">Y</div>
      <div className="white-key">U</div>
    </div>
  )
}