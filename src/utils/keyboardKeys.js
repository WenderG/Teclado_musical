import * as Tone from 'tone'

const synth = new Tone.Synth().toDestination();

export const keyBoardWhiteKeys = {
  'q': () => synth.triggerAttackRelease("C3", "1n"),
  'w': () => synth.triggerAttackRelease("D3", "2n"),
  'e': () => { },
  'r': () => { },
  't': () => { },
  'y': () => { },
  'u': () => { }
}

export const keyBoardBlackKeys = {
  2: () => { },
  3: () => { },
  5: () => { },
  6: () => { },
  7: () => { }
}

export const keyBoardNameWhiteKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U'];
export const keyBoardNameBlackKeys = [2, 3, 4, 5, 6, 7];