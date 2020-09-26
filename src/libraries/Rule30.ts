import { CellState, Cell } from "@/libraries/Cell"

/**
 * `CellState` の世代を進める。
 * @param elements `CellState` 0から始まって0で終わる。
 */
export function survive (elements: CellState): CellState {
    let survived: CellState = []

    elements.forEach((element, index) => {
        const _prev = elements[index - 1]
        const _next = elements[index + 1]

        const p = _prev !== undefined ? _prev : 0
        const r = _next !== undefined ? _next : 0
        const q = elements[index]

        // Rule 30
        // const computed = (p + q + r + q * r) % 2 as Cell

        // Rule 90
        const computed = (p + r) % 2 as Cell

        survived.push(computed)
    })

    return survived
}