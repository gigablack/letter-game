import { Action, BoardState } from "../types/Types"
import { generateNextMoves } from "../utils/generateNextMoves"
import dictionaryWords from "../boardFiles/dictionary.json"

const checkValidWords = (word: string, words: string[]): boolean => {
  return words.includes(word)
}

export const selectLetter = (state: BoardState, action: Action): BoardState => {
  return {
    ...state,
    word: state.word + action.data.letter,
    nextMove: generateNextMoves(action.data.coordinate),
    isValid: checkValidWords(
      state.word + action.data.letter,
      dictionaryWords.words.map(w => w.toUpperCase())
    ),
  }
}
