import React, { useState, createContext } from 'react'
import ContextDevTool from 'react-context-devtool'

export const AppContext = createContext()

export const AppProvider = (props) => {
    const [app, setApp] = useState({})
    return (
        <AppContext.Provider value={[app, setApp]}>
            <ContextDevTool context={AppContext} />
            {props.children}
        </AppContext.Provider>
    )
}