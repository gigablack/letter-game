import React from "react";
import tw, { styled } from 'twin.macro'
import { useBoard } from "../../contexts/BoardContext/BoardContext";

const Container = tw.div`
border-2 border-gray-500 md:h-1/4 flex items-center justify-between p-5
md:ml-5 md:my-0 md:mr-0 m-5
`

const Word = styled.p(({ status }) => [
    tw`text-3xl font-bold tracking-widest`,
    status ? tw`text-green-500` : tw`text-red-500`
]) 
const Status = styled.p(({ status }) => [
    status ? tw`text-green-500` : tw`text-red-500`
]) 

const Display = () => {
    const { state } = useBoard()
    return (
        <Container>
            <Word status={state?.isValid} >{state?.word}</Word>
            <Status status={state?.isValid} >{state?.isValid ? 'valid' : 'invalid'}</Status>
        </Container>
    )
}

export default Display