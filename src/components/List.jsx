import React from 'react'

function List() {

  return (
    <div>
        <li className="minus">
          <div className='li-flex'>
            <div className='li-text'>text</div> 
            <div>
              <span className='li-span'>$0.00</span>
              <button className="delete-button">x</button>
            </div>
          </div>
        </li>
    </div>
  )
}

export default List