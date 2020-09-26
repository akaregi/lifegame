import { CellState } from './Cell'

export function toPretty(cells: CellState) {
    return cells.map(e => {
        if (e === 1) {
            return '⬛'
        } else {
            return '⬜'
        }
    }).join('')
}