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
          { text: "C", background: "#A29D95", color: "#111111" },
          { text: "+/-", background: "#A29D95", color: "#111111" },
          { text: "%", background: "#A29D95", color: "#111111" },
          { text: "÷", background: "#FFB039", color: "#ffffff", type: "operator" },
          { text: "7",  background: "#484242", color: "#ffffff", type: "number" },
          { text: "8", background: "#484242", color: "#ffffff", type: "number" },
          { text: "9", background: "#484242", color: "#ffffff", type: "number" },
          { text: "x",background: "#FFB039", color: "#ffffff", type: "operator" },
          { text: "4", background: "#484242", color: "#ffffff", type: "number" },
          { text: "5",background: "#484242", color: "#ffffff", type: "number" },
          { text: "6",background: "#484242", color: "#ffffff", type: "number" },
          { text: "-",background: "#FFB039", color: "#ffffff", type: "operator" },
          { text: "1",background: "#484242", color: "#ffffff", type: "number" },
          { text: "2",background: "#484242", color: "#ffffff", type: "number" },
          { text: "3",background: "#484242", color: "#ffffff", type: "number" },
          { text: "+",background: "#FFB039", color: "#ffffff", type: "operator" },
          { text: "0",background: "#484242", color: "#ffffff", type: "number" },
          { text: ".",background: "#484242", color: "#ffffff", type: "number" },
          { text: "=",background: "#FFB039", color: "#ffffff", type: "operator" }
        ]
    })

    const value = { inputValue, setInputValue, calc, setCalc, shouldSetNumberRef, prevNumberRef }
    
    return (
        <CalculatorContext.Provider value={value} >{children}</CalculatorContext.Provider>
    )
}

export { CalculatorContext }
export default CalculatorProvider