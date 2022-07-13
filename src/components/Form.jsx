import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

function Form() {

    const [inputValue, setInputValue] = useState("")
    const [amount, setAmount] = useState(0)

    const { addItem } = useContext(GlobalContext)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addItem(inputValue, amount)
        setInputValue("")
        setAmount(0)
    }
  
    return (
        <div className='formPart'>
    
            <h2>Add New Transaction</h2>
            <hr />
            <form onSubmit={handleSubmit}>
    
                <div className='formText'>
                <label htmlFor="text">Amount Text</label>
                <input 
                    type="text" 
                    placeholder="Enter amount text..." 
                    value={inputValue}
                    onChange={(e) => {setInputValue(e.target.value)}}
                />
                </div>
    
                <div className='formNumber'>
                <label htmlFor="amount">Amount</label>
                <input 
                    type="number" 
                    placeholder="Enter amount..." 
                    value={amount}
                    onChange={(e) => {setAmount(e.target.value)}}
                />
                </div>
    
                <button type='submit' className="button">Add Transaction</button>
            </form>
    
        </div>
    )
  }
  
  export default Form