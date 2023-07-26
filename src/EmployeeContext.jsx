import { useContext, createContext, useState, useReducer } from "react"
import { data } from "./data";

const EmployeeContext =createContext();

export function useEmployeeContext(){
    return useContext(EmployeeContext)
}
function reducer(state,action){
    switch(action.type){
        case "Add":
            return [...state,action.payload]
        case "Delete":
            return state.filter((employee) => employee.id !== action.payload);
        case "Filter":
            return state.filter(
                  (employee) =>
                    (employee.name.toLowerCase().includes(action.payload) ||
                    employee.title.toLowerCase().includes(action.payload))
                )
        default:
            return state
}
}
export function EmployeeProvider(props){
    const [employees,dispatch] = useReducer(reducer, data)
    const [chosenEmployee, setChosenEmployee] = useState({});
    const sharedValue = {
        employees,
        dispatch,
        chosenEmployee,
        setChosenEmployee
    }
    return(
        <EmployeeContext.Provider value={sharedValue}>
            {props.children}
        </EmployeeContext.Provider>
    )
}