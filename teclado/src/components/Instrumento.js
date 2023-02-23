import React, { Fragment } from "react";
import AudioInstrumento from "./AudioInstrumento";
import getNotesBetween from "./utils/getNotesBetween";

const Instrumento = ({ nomeDoInstrumento, startNote, endNote }) => {
  const notas = getNotesBetween(startNote, endNote)

  return (
    <Fragment>
      {notas.map(notas => {
        return <Fragment>Nota: {note}</Fragment>
      })}
      <AudioInstrumento/>
    </Fragment>
  )
}

export default Instrumento