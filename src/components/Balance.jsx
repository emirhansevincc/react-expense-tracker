import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'

function Balance() {

  const { activities } = useContext(GlobalContext)

  const amounts = activities.map(activity => activity.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className='balance'>
      <h3>Account Balance</h3>
      <h1  className={total < 0 ? 'red' : 'green'}>${total}</h1>
      <hr />
    </div>
  )
}

export default Balance