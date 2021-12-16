import React from "react"
import tw, { styled } from 'twin.macro'
import { Vector } from '../../types/Types'
import { useLetter } from '../../hooks/useLetter'

const H1 = tw.h1`text-white text-4xl font-bold cursor-pointer`

const styles = {
    textShadow: '-1px -1px 3px #555'
}

const Container = styled.div(({ selected, isValid }: { selected: boolean, isValid: boolean }) => [
    selected && isValid && tw`from-green-300 to-green-700`,
    selected && !isValid && tw`from-red-300 to-red-700`,
    !selected && tw`from-yellow-300 to-yellow-700 border-2 border-red-500`,
    tw`bg-gradient-to-b rounded-xl flex items-center justify-center col-auto
     shadow cursor-pointer transition-all active:w-10/12 active:h-5/6 active:m-auto`
])


const Letter = ({ coordinate }:{ coordinate: Vector }) => {
    const { handleClick, letter, selected, isValid } = useLetter(coordinate)
    return (
        <Container onClick={handleClick} selected={selected} isValid={isValid} >
            <H1 style={styles}>{letter}</H1>
        </Container>
    )
}

export default Letter
