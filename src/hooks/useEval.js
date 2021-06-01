import {useState} from 'react'

const useEval = () => {
    
    const [evalDisplay, setEvalDisplay] = useState(0)
    const [inputDisplay, setInputDisplay] = useState(0)

    //Calcular Operacion
    const changeEvalDisplay = (data) => {
        setEvalDisplay(evalDisplay + data)
    }
    //Mostrar Display2
    const handleInputDisplay = (data) => { 
        //setInputDisplay(inputDispay + data)
        //(data === '*'|| data === '/') && setInputDisplay(inputDispay + 'El operado')
        if (data === '*'|| data === '/' || data === '-' || data === '+') {
            if (inputDisplay != 0) {
                evalDisplay == 0 ? setEvalDisplay(inputDisplay + data): setEvalDisplay((previusState) => previusState + inputDisplay + data)
                setInputDisplay(0)
            }
        }else{
            inputDisplay === 0 ? setInputDisplay(data): setInputDisplay(inputDisplay + data)
        }
    }

    //Evaluar el display
    const setTotal = (data) => {
        let x = evalDisplay + inputDisplay
        //setEvalDisplay((previusState) => previusState + inputDisplay)
        setEvalDisplay(eval(x))
        setInputDisplay(0)
    }
    // Reset Display Operation
    const resetDisplay = () => {
        setEvalDisplay(0)
        setInputDisplay(0)
    }



    return [
        evalDisplay,
        inputDisplay,
        handleInputDisplay,
        changeEvalDisplay,
        setTotal,
        resetDisplay
    ]
}

export default useEval