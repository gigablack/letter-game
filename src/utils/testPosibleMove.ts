import { Moves, Vector } from "../types/Types"
import { vectorEqual } from "./vectorMath"

export const testPosibleMove = (coordinate: Vector, moves: Moves): boolean => {
  for (let move of moves) {
    if (vectorEqual(coordinate, move)) {
      return true
    }
  }
  return false
}
