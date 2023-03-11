import { useEffect, createRef } from 'react';

import { WhiteKey } from './components/WhiteKey/WhiteKey'
import { BlackKey } from './components/BlackKey/BlackKey'

import {
  keyBoardWhiteKeys,
  keyBoardBlackKeys,
  keyBoardNameWhiteKeys,
  keyBoardNameBlackKeys
} from './utils/keyboardKeys'

function App() {
  const whiteKeyRefs = Array.from({ length: 7 }, () => createRef());
  const blackKeyRefs = Array.from({ length: 6 }, () => createRef());

  useEffect(() => {
    whiteKeyRefs[0].current.focus();
  }, [])

  function keyPress(obj, event) {
    if (obj.hasOwnProperty(event.key)) {
      const currentKey = obj[event.key];
      currentKey();
    }

    return
  }

  function handleClick(obj, event) {
    const currentClick = event.target.textContent.toLowerCase();
    const matchKey = obj[currentClick];

    matchKey();
  }

  return (
    <>
      <div className="piano-white-keys flex">
        {Array.from({ length: 7 }, (_, i) => (
          <WhiteKey
            key={i}
            text={keyBoardNameWhiteKeys[i]}
            tabIndex={i + 1}
            ref={whiteKeyRefs[i]}
            handleClick={(e) => handleClick(keyBoardWhiteKeys, e)}
            onKeyDown={(e) => keyPress(keyBoardWhiteKeys, e)}
            onBlur={() => whiteKeyRefs[i].current.focus()}
          />
        ))}
      </div>

      <div className="piano-black-keys flex gap">
        {Array.from({ length: 6 }, (_, i) => (
          <BlackKey
            key={i}
            text={keyBoardNameBlackKeys[i]}
            tabIndex={i + 1}
            ref={blackKeyRefs[i]}
            handleClick={(e) => handleClick(keyBoardBlackKeys, e)}
            onKeyDown={(e) => keyPress(keyBoardBlackKeys, e)}
            onBlur={() => blackKeyRefs[i].current.focus()}
          />
        ))}
      </div>
    </>
  )
}

export default App
