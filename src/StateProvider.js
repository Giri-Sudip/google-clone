import React, {createContext,useContext,useReducer} from 'react'
// Preparing for data layer
export const StateContext=createContext();
export const StateProvider =({reducer, initialState,children})=>(
  <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
  </StateContext.Provider>
);
// hook which allow us to pull information from the dta layer.
export const useStateValue=()=>useContext(StateContext);