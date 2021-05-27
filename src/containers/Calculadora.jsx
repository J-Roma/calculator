import React from 'react'
import styled from 'styled-components'
import Body from '../components/Body'
import Displays from '../components/Displays'

const Container = styled.div`
    max-width: 400px;
    height: 600px;
    background: #008B8B;
    margin: 50px auto 0 auto;
    border-radius: 4px;
`

const Calculadora = () => {
    return (
        <Container>
            <Displays/>
            <Body/>
        </Container>
    )
}

export default Calculadora
