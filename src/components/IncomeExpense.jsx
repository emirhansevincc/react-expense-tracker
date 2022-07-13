import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

function IncomeExpense() {

  const { activities } = useContext(GlobalContext)

  const amounts = activities.map(activity => activity.amount)
  
  const income = amounts.filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0).toFixed(2);

  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  return (
    <div className='income-expense'>
      <div className="income">
        <h2>Income</h2>
        <p className='income-money'>+${income}</p>
      </div>
      <div className="income">
        <h2>Expense</h2>
        <p className='expense-money'>-${expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpense