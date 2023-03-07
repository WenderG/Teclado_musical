export const KeyboardParaNotas = (keyboardMap, nota) => {
    const keyboardShortcuts = Object.keys(keyboardMap);
    return keyboardShortcuts.filter(shortcut => keyboardMap[shortcut] === nota);
  }