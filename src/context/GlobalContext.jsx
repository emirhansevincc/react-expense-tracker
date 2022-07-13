import React, { createContext, useState } from 'react'
import { v4 as uuidv4} from 'uuid'

export const GlobalContext = createContext()

function GlobalContextProvider({ children }) {

    const [activities, setActivities] = useState([
        { id: uuidv4(), text: 'Laptop', amount: -1000 },
        { id: uuidv4(), text: 'Salary', amount: 3000 },
        { id: uuidv4(), text: 'Telephone', amount: -200 },
        { id: uuidv4(), text: 'Investment', amount: 1500 }
    ])

    const addItem = (inputValue, amount) => {
        setActivities([...activities, {
            id: uuidv4(),
            text: inputValue,
            amount: +amount
        }])
    }

  return (
    <div>
        <GlobalContext.Provider value={{activities, addItem}}>
            {children}
        </GlobalContext.Provider>
    </div>


  )
}

export default GlobalContextProvider