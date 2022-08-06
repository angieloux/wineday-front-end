import {createContext, useContext} from 'react';

// the context object
export const GlobalContext = createContext()

// a hook that wraps useContext
export const useGlobalState = () => useContext(GlobalContext);