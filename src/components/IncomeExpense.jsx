import React from 'react'

function IncomeExpense() {
  return (
    <div className='income-expense'>
      <div className="income">
        <h2>Income</h2>
        <p className='income-money'>+$0.00</p>
      </div>
      <div className="income">
        <h2>Expense</h2>
        <p className='expense-money'>-$0.00</p>
      </div>
    </div>
  )
}

export default IncomeExpense