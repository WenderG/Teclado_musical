import tons from "./Notas";

export default function NotasEntreladas(startNote, endNote) {
  const startingIndex = tons.indexOf(startNote);
  const endingIndex = tons.indexOf(endNote);
  return tons.slice(startingIndex, endingIndex + 1);
}