import React from 'react'
import styled from 'styled-components'
import useEval from '../hooks/useEval'

const Display = styled.div`
    text-align: end;
    max-width: 360px;
    margin: 0 auto;
    padding: 3px;
    width: 400px;
    height: 20%;
    background: white;
    border-radius: 4px;
    background-image: repeating-linear-gradient(to right,
    #c4e17f 0px, #c4e17f 50px,
    #f7fdca 50px, #f7fdca 100px,
    #fad071 100px, #fad071 150px,
    #f0766b 150px, #f0766b 200px,
    #db9dbe 200px, #db9dbe 250px,
    #c49cdf 250px, #c49cdf 300px,
    #6599e2 300px, #6599e2 350px,
    #61c2e4 350px, #61c2e4 400px);
    background-size: 100% 10px;
    background-repeat:no-repeat;
`

const H3Style = styled.h3`
    margin-right: 25px;
`
const Displays = () => {

    const [evalDisplay, inputDisplay] = useEval();

    return (
        <Display>
            <H3Style id="display">{evalDisplay}</H3Style>
            <hr />
            <H3Style>{inputDisplay}</H3Style>
        </Display>
    )
}

export default Displays
