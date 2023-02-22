import SoundFontPlayer from "soundfont-player";
import AudioContext from "./AudioContext";

const stop = {
    stop() {}
}

const tocar = {
    play() {
        return tocar
    }
}

const audioPlayer  = () => {
    const audio = AudioContext && new AudioContext()

    let soundPlayer = tocar

    const player = {
        setInstrumento(instrumento) {
            SoundFontPlayer.instrument(AudioContext, instrumento)
            .then(SoundFontPlayer=> {
                soundPlayer = SoundFontPlayer
            })
            .catch(evento => {
                soundPlayer = tocar
            })
        }
        playNote(note) {
            soundPlayer.play(note)
        }
    }
    return player
}

export default Player
 