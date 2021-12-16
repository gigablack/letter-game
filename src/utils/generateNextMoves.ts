import { Vector, Moves } from "../types/Types"
import { vectorAdd, vectorSub } from "./vectorMath"

export const generateNextMoves = (coordinate: Vector): Moves => {
  const xUnitVector: Vector = [1, 0]
  const yUnitVector: Vector = [0, 1]
  const left: Vector = vectorSub(coordinate, xUnitVector)
  const upperLeft: Vector = vectorSub(left, yUnitVector)
  const right: Vector = vectorAdd(coordinate, xUnitVector)
  const upperRight: Vector = vectorSub(right, yUnitVector)
  const bottomLeft: Vector = vectorAdd(left, yUnitVector)
  const bottomRight: Vector = vectorAdd(right, yUnitVector)
  const up: Vector = vectorSub(coordinate, yUnitVector)
  const down: Vector = vectorAdd(coordinate, yUnitVector)

  return [left, right, up, down, upperLeft, upperRight, bottomLeft, bottomRight]
}
