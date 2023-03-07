import React, { useEffect, useState } from "react";
import Player from "./Player"

const AudioInstrumento = ({nomeDoInstrumento, notas}) => {
    const [tocarInstrumento, setTocarInstrumento] = useState(null)
    useEffect(() => {
        setTocarInstrumento(Player())
    }, [])

    useEffect(() => {
        if (tocarInstrumento) {
            setInstrumento()
            playNotes()
        }
    }, [tocarInstrumento])

    useEffect(() => {
        if(notas && notas.length > 0) {
            playNotes()
        }
    }, [notas])

    const setInstrumento = () => {
        tocarInstrumento.setInstrumento(nomeDoInstrumento);
    }

    const playNotes = () => {
        if (tocarInstrumento) {
          tocarInstrumento.playNote(notas[0]);
        }
    }

    return null
}

export default AudioInstrumento