import React from "react"
import tw from "twin.macro"
import Letter from "../Letter/Letter"
import { Vector } from "../../types/Types"

const Container = tw.section`
md:w-1/2 w-full h-3/5 md:h-full grid grid-cols-4 grid-rows-4 gap-3
`
const coordinates: Vector[] = [
  [0, 0],
  [1, 0],
  [2, 0],
  [3, 0],
  [0, 1],
  [1, 1],
  [2, 1],
  [3, 1],
  [0, 2],
  [1, 2],
  [2, 2],
  [3, 2],
  [0, 3],
  [1, 3],
  [2, 3],
  [3, 3],
]

const Board = () => {
  return (
    <Container>
      {coordinates.map(coord => (
        <Letter key={`coord-${coord[0]}-${coord[1]}`} coordinate={coord} />
      ))}
    </Container>
  )
}

export default Board
