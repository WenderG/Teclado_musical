import React, { Fragment, useState, useEffect } from "react";
import NotaAcidental from "./NotaAcidental";
import { KeyboardParaNotas } from "./KeyBoardParaNotas";
import AudioInstrumento from "./AudioInstrumento";
import NotasEntreladas from "./NotasEntreladas";

const isRegularKey = evento => {
  return !evento.ctrlKey && !evento.metaKey && !evento.shiftKey
}

const Instrumento = ({
  nomeDoInstrumento,
  startNote,
  endNote,
  renderPianoKey,
  keyboardMap
}) => {
  const notes = NotasEntreladas(startNote, endNote)

  const [state, setState] = useState({
    TocandoNotas: []
  })

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
  }, [])

  const NotaDoTeclado = keyboardKey => {
    return keyboardMap[keyboardKey.toUpperCase()]
  }

  const handleKeyDown = evento => {
    if (isRegularKey(evento) && !evento.repeat) {
      const nota = NotaDoTeclado(evento.key)
      if (nota) {
        setState({ ...state, TocandoNotas: [...state.TocandoNotas, nota] })
      }
    }
  }

  const handleKeyUp = evento => {
    if (isRegularKey(evento) && !evento.repeat) {
      const nota = NotaDoTeclado(evento.key);
      if (nota) {
        setState({
          ...state,
          TocandoNotas: state.TocandoNotas.filter(
            NotaTocando => NotaTocando !== nota
          )
        })
      }
    }
  }

  const onPlayNoteStart = nota => {
    setState({ ...state, TocandoNotas: [...state.TocandoNotas, nota] });
  }

  const onPlayNoteEnd = nota => {
    setState({
      ...state,
      TocandoNotas: state.TocandoNotas.filter(
        notePlaying => notePlaying !== nota
      )
    })
  }

  return (
    <Fragment>
      {notes.map(nota => {
        return (
          <Fragment key={nota}>
            {renderPianoKey({
              nota,
              isAccidentalNote: NotaAcidental(nota),
              isNotePlaying: state.TocandoNotas.includes(nota),
              startPlayingNote: () => onPlayNoteStart(nota),
              stopPlayingNote: () => onPlayNoteEnd(nota),
              keyboardShortcut: KeyboardParaNotas(keyboardMap, nota)
            })}
          </Fragment>
        )
      })}

      <AudioInstrumento
        nomeDoInstrumento={nomeDoInstrumento}
        notas={state.TocandoNotas}
      />
    </Fragment>
  )
}

export default Instrumento;