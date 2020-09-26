import { CellState } from './Cell'

export function newState (length: number): CellState {
    if (length % 2 !== 0) {
        throw new Error()
    }

    const side = length / 2
    const sideArray = getZeroArray(side)

    return sideArray.concat([1]).concat(sideArray) as CellState
}

function getZeroArray (length: number) {
    return Array(length).fill(0) as number[]
}