import tons from './Notas'

export default (notas) => {
    return tons.includes(notas) && notas.includes('#')
}