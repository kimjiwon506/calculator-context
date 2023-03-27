import { createContext, useState, useRef } from "react";

const CalculatorContext = createContext({
    state: { inputValue: '', buttonArray: [] },
    actions: { calculate: () => {} }
})

const CalculatorProvider = ({ children }) => {
    // 연산자 클릭시 전환될 수 있도록 한다.
    const shouldSetNumberRef = useRef(false);
    // 이전값을 담을 수 있도록 한다.
    const prevNumberRef = useRef(null);
    const [ inputValue, setInputValue ] = useState('')
    const [ calc , setCalc ] = useState({
        inputValue: '0',
        buttonArray: [
          { text: "C", id:"reset", background: "#A29D95", color: "#111111" },
          { text: "+/-", id:"", background: "#A29D95", color: "#111111" },
          { text: "%", id:"percent", background: "#A29D95", color: "#111111" },
          { text: "÷", id:"divide", background: "#FFB039", color: "#ffffff", type: "operator" },
          { text: "7", id:"seven", background: "#484242", color: "#ffffff", type: "number" },
          { text: "8", id:"eight", background: "#484242", color: "#ffffff", type: "number" },
          { text: "9", id:"nine", background: "#484242", color: "#ffffff", type: "number" },
          { text: "x", id:"multiply",background: "#FFB039", color: "#ffffff", type: "operator" },
          { text: "4", id:"four", background: "#484242", color: "#ffffff", type: "number" },
          { text: "5", id:"five",background: "#484242", color: "#ffffff", type: "number" },
          { text: "6", id:"six",background: "#484242", color: "#ffffff", type: "number" },
          { text: "-", id:"minus",background: "#FFB039", color: "#ffffff", type: "operator" },
          { text: "1", id:"one",background: "#484242", color: "#ffffff", type: "number" },
          { text: "2", id:"two",background: "#484242", color: "#ffffff", type: "number" },
          { text: "3", id:"three",background: "#484242", color: "#ffffff", type: "number" },
          { text: "+", id:"plus",background: "#FFB039", color: "#ffffff", type: "operator" },
          { text: "0", id:"zero",background: "#484242", color: "#ffffff", type: "number" },
          { text: ".", id:"comma",background: "#484242", color: "#ffffff", type: "number" },
          { text: "=", id:"equal",background: "#FFB039", color: "#ffffff", type: "operator" }
        ]
    })

    const value = { inputValue, setInputValue, calc, setCalc, shouldSetNumberRef, prevNumberRef }
    
    return (
        <CalculatorContext.Provider value={value} >{children}</CalculatorContext.Provider>
    )
}

export { CalculatorContext }
export default CalculatorProvider