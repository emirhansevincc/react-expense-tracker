import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

function List({ activity }) {

  const sign = activity.amount < 0 ? '-' : '+';

  const { deleteItem } = useContext(GlobalContext)

  return (
    <div>
        <li className={activity.amount < 0 ? 'minus' : 'plus'}>
          <div className='li-flex'>
            <div className='li-text'>{activity.text}</div> 
            <div>
              <span className='li-span'>{sign}${Math.abs(activity.amount)}</span>
              <button className="delete-button" onClick={() => {
                deleteItem(activity.id)
              }}>x</button>
            </div>
          </div>
        </li>
    </div>
  )
}

export default List