import React,{createContext,useContext,useReducer} from "react"

//the data layer
export const StateContext = createContext()

//build the provider
export const StateProvider =({reducer,initialState,children})=>(
<StateContext.Provider value={useReducer(reducer,initialState)}>{children}</StateContext.Provider> //in our case the children reffer to the App
)


export const useStateValue=()=>useContext(StateContext)
