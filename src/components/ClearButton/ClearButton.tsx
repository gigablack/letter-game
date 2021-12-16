import React from "react"
import tw from "twin.macro"
import { useBoard } from "../../contexts/BoardContext/BoardContext"
import { ActionType } from "../../types/Types"
import { AiFillCloseCircle } from "react-icons/ai"

const Container = tw.div`
flex items-center justify-end md:h-1/4 p-5 
`
const P = tw.p`text-gray-300 text-xl mr-5`

const X = tw.div`rounded-full 
flex items-center justify-center 
text-center text-4xl text-gray-300 cursor-pointer`

const ClearButton = () => {
  const { dispatch } = useBoard()
  const handleClick = () => {
    dispatch({ type: ActionType.RESET })
  }
  return (
    <Container>
      <P>clear word</P>
      <X onClick={handleClick}>
        <AiFillCloseCircle />
      </X>
    </Container>
  )
}

export default ClearButton
