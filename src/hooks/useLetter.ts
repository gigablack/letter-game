import { useState, useEffect } from "react"
import { ActionType, Vector } from "../types/Types"
import { randomLetter } from "../utils/randomLetter"
import { useBoard } from "../contexts/BoardContext/BoardContext"
import { testPosibleMove } from "../utils/testPosibleMove"

type LetterState = {
  handleClick: () => void
  letter: string
  selected: boolean
  isValid: boolean
}

export const useLetter = (coordinate: Vector): LetterState => {
  const [letter] = useState(randomLetter())
  const [selected, setSelected] = useState(false)
  const { dispatch, state } = useBoard()
  const selectAndDispatch = () => {
    setSelected(true)
    dispatch({ data: { coordinate, letter }, type: ActionType.SELECT_LETTER })
  }
  const handleClick = () => {
    if (!selected) {
      if (state.nextMove) {
        if (testPosibleMove(coordinate, state.nextMove)) {
          selectAndDispatch()
        }
      } else {
        selectAndDispatch()
      }
    }
  }

  useEffect(() => {
    if (!state.word) setSelected(false)
  }, [state])

  return {
    handleClick,
    letter,
    selected,
    isValid: state?.isValid,
  }
}
