export type Vector = [number, number]

export type Moves = [Vector,Vector,Vector,Vector,Vector,Vector,Vector,Vector] | null

export type BoardState = {
    isValid: boolean,
    word: string,
    nextMove: Moves
}

export enum ActionType {
    SELECT_LETTER,
    RESET
}

export type Action = {
    data?: { coordinate: Vector, letter: string },
    type: ActionType
}

export type ContextType = {
    state: BoardState,
    dispatch: React.Dispatch<Action>
}