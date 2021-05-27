import {useState} from 'react'

const useEval = () => {
    
    const initialState = {
        evalDisplay: '',
        inputDispay: ''
    }
    const [display, setDisplay] = useState(initialState)
    const {evalDisplay, inputDispay} = display

    //Calcular Operacion
    const changeEvalDisplay = (data) => {
        setDisplay({
            ...display,
            evalDisplay: [...evalDisplay, data]
        })
    }
    //Mostrar Display2
    const handleInputDisplay = (data) => { 
        setDisplay({
            ...display,
            inputDisplay: [...inputDispay, data]
        })

    }
    // Reset Display Operation
    const resetDisplay = () => {
        setDisplay(initialState)
    }

    return [evalDisplay, inputDispay, handleInputDisplay, changeEvalDisplay, resetDisplay]
}

export default useEval