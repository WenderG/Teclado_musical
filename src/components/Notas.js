const tons = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const escala_octatonica = [1, 2, 3, 4, 5, 6, 7];

export default escala_octatonica.reduce((notas, numero) => {
  const notasDeOitava = tons.map(tom => `${tom}${numero}`);
  return [...notas, ...notasDeOitava];
}, []);