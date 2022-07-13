import React from 'react'

function List({ activity }) {

    const sign = activity.amount < 0 ? '-' : '+';

  return (
    <div>
        <li className={activity.amount < 0 ? 'minus' : 'plus'}>
          <div className='li-flex'>
            <div className='li-text'>{activity.text}</div> 
            <div>
              <span className='li-span'>{sign}${Math.abs(activity.amount)}</span>
              <button className="delete-button">x</button>
            </div>
          </div>
        </li>
    </div>
  )
}

export default List