import { Vector } from "../types/Types"

export const vectorEqual = (a: Vector, b: Vector): boolean =>
  a[0] === b[0] && a[1] === b[1]

export const vectorAdd = (a: Vector, b: Vector): Vector => [
  a[0] + b[0],
  a[1] + b[1],
]

export const vectorSub = (a: Vector, b: Vector): Vector => [
  a[0] - b[0],
  a[1] - b[1],
]
