import React, { createContext, useReducer, useContext } from "react"
import { selectLetter } from "../../actionsCreators/selectLetter"
import { Action, ActionType, BoardState, ContextType } from "../../types/Types"

const boardContext = createContext({} as ContextType)

const initialState: BoardState = {
  isValid: false,
  word: "",
  nextMove: null,
}

const reducer = (state: BoardState, action: Action) => {
  switch (action.type) {
    case ActionType.SELECT_LETTER:
      return selectLetter(state, action)
    case ActionType.RESET:
      return initialState
    default:
      return state
  }
}

export const BoardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <boardContext.Provider value={{ state, dispatch }}>
      {children}
    </boardContext.Provider>
  )
}

export const useBoard = () => {
  return useContext(boardContext)
}
