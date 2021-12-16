import React from "react"
import Board from "../components/Board/Board"
import ClearButton from "../components/ClearButton/ClearButton"
import Display from "../components/Display/Display"
import tw from "twin.macro"
import { Helmet } from "react-helmet"

const MainContainer = tw.main`
h-screen px-1 flex items-center justify-center
`
const Container = tw.main`
hidden md:flex h-1/2 w-1/2 justify-between
`
const MobileContaner = tw.main`
flex w-full h-full md:hidden flex-col justify-between
`

const DisplayContainer = tw.div`
w-1/2 hidden md:flex flex-col justify-between
`

export default function Home() {
  return (
    <MainContainer>
      <Helmet title="IWords" />
      <Container>
        <Board />
        <DisplayContainer>
          <ClearButton />
          <Display />
        </DisplayContainer>
      </Container>
      <MobileContaner>
        <ClearButton />
        <Board />
        <Display />
      </MobileContaner>
    </MainContainer>
  )
}
