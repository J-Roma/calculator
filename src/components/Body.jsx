import React from 'react'
import styled from 'styled-components'
import useEval from '../hooks/useEval'

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

const Button = styled.div`
    text-align: center;
    height: 60px;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #c4c4c4;
    background-color: transparent;
    font-size: 2rem;
    color: #333;
    background-image: linear-gradient(to bottom,transparent,transparent 50%,rgba(0,0,0,.04));
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.05), inset 0 1px 0 0 rgba(255,255,255,.45), inset 0 -1px 0 0 rgba(255,255,255,.15), 0 1px 0 0 rgba(255,255,255,.15);
    text-shadow: 0 1px rgba(255,255,255,.4);
    :hover{
      background: #eaeaea;
  }
`

const Body = () => {

    const [handleInputDisplay] = useEval();

    const handleClick = (e) => {
        handleInputDisplay('hola')
        console.log(e.target.attributes.value.nodeValue);
    }
    return (
        <Keys>
            <div>
                <CalculatorKeys className="calculator-keys">
                    <Button id="+" type="Button" value="+" onClick={handleClick}>+</Button>
                    <Button onClick={handleClick} id="subtract" type="Button" value="-">-</Button>
                    <Button onClick={handleClick} id="multiply" type="Button" value="*">&times;</Button>
                    <Button onClick={handleClick} id="divide" type="Button" value="/">&divide;</Button>

                    <Button onClick={handleClick} id="one" type="Button" value="1" >1</Button>
                    <Button onClick={handleClick} id="two" type="Button" value="2">2</Button>
                    <Button onClick={handleClick} id="three" type="Button" value="3">3</Button>
                    <Button onClick={handleClick} id="four" type="Button" value="4">4</Button>
                    <Button onClick={handleClick} id="five" type="Button" value="5">5</Button>
                    <Button onClick={handleClick} id="six" type="Button" value="6">6</Button>
                    <Button onClick={handleClick} id="seven" type="Button" value="7">7</Button>
                    <Button onClick={handleClick} id="eight" type="Button" value="8">8</Button>
                    <Button onClick={handleClick} id="nine" type="Button" value="9">9</Button>

                    <Button onClick={handleClick} id="zero" type="Button" value="0">0</Button>
                    <Button onClick={handleClick} id="decimal" type="Button" value=".">.</Button>
                    <Button onClick={handleClick} id="clear" type="Button" equal="all-clear" value="all-clear">AC</Button>

                    <Button onClick={handleClick} id="equals" type="Button" equal="equal-sign" value="=">=</Button>

                </CalculatorKeys>
            </div>
        </Keys>
    )
}

export default Body
