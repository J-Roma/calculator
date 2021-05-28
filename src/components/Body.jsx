import React from 'react'
import styled from 'styled-components'
//import css from 'styled-components'

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

const Keys = styled.div`
    width: 92%;
    height: 70%;
    background: white;
    margin: 2rem auto 0 auto;
    border-radius: 4px;
`

const CalculatorKeys = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: 20px;
`

const Button = styled.button`
    text-align: center;
    height: 60px;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #c4c4c4;
    background-color: transparent;
    font-size: 2rem;
    //color: #333;
    color: ${props => props.operator ? `#337cac` : `#333`};
    ${props => props.equalsing && `
        background-color: #2e86c0;
        border-color: #337cac;
        color: #fff;
        height: 100%;
        grid-area: 2 / 4 / 6 / 5;
    `};
    ${props => props.allclear && `
        background-color: #f0595f;
        border-color: #b0353a;
        color: #fff;
    `};
    background-image: linear-gradient(to bottom,transparent,transparent 50%,rgba(0,0,0,.04));
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.05), inset 0 1px 0 0 rgba(255,255,255,.45), inset 0 -1px 0 0 rgba(255,255,255,.15), 0 1px 0 0 rgba(255,255,255,.15);
    text-shadow: 0 1px rgba(255,255,255,.4);
    &:hover{
        background: #eaeaea;
    }
`

const Body = () => {

    const [evalDisplay, inputDisplay, handleInputDisplay, changeEvalDisplay, setTotal, resetDisplay] = useEval();
    
    const handleClick = (e) => {
        handleInputDisplay(e.target.attributes.value.nodeValue)
    }

    const excOperation = (e) => {
        setTotal(e.target.attributes.value.nodeValue)
    }
    return (
        <>
            <Display>
                <H3Style id="display">{evalDisplay}</H3Style>
                <hr />
                <H3Style>{inputDisplay}</H3Style>
            </Display>
            <Keys>
                <div>
                    <CalculatorKeys classNameName="calculator-keys">
                        <Button id="+" type="Button" operator value="+" onClick={handleClick}>+</Button>
                        <Button onClick={handleClick} operator id="subtract" type="Button" value="-">-</Button>
                        <Button onClick={handleClick} operator id="multiply" type="Button" value="*">&times;</Button>
                        <Button onClick={handleClick} operator id="divide" type="Button" value="/">&divide;</Button>

                        <Button onClick={handleClick} id="seven" type="Button" value="7">7</Button>
                        <Button onClick={handleClick} id="eight" type="Button" value="8">8</Button>
                        <Button onClick={handleClick} id="nine" type="Button" value="9">9</Button>
                        <Button onClick={handleClick} id="four" type="Button" value="4">4</Button>
                        <Button onClick={handleClick} id="five" type="Button" value="5">5</Button>
                        <Button onClick={handleClick} id="six" type="Button" value="6">6</Button>
                        <Button onClick={handleClick} id="one" type="Button" value="1" >1</Button>
                        <Button onClick={handleClick} id="two" type="Button" value="2">2</Button>
                        <Button onClick={handleClick} id="three" type="Button" value="3">3</Button>
                        <Button onClick={handleClick} id="zero" type="Button" value="0">0</Button>
                        <Button onClick={handleClick} className="decimal" id="decimal" type="Button" value=".">.</Button>
                        <Button onClick={resetDisplay} allclear id="clear" type="Button" equal="all-clear" value="all-clear">AC</Button>

                        <Button onClick={excOperation} equalsing id="equals" type="Button" equal="equal-sign" value="=">=</Button>

                    </CalculatorKeys>
                </div>
            </Keys>
        </>
    )
}

export default Body
