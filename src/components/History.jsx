import React, { useContext }  from 'react'
import List from './List'
import { GlobalContext } from '../context/GlobalContext'

function History() {

  const { activities } = useContext(GlobalContext)
  // console.log(activities);

  return (
    <div className='history'>
      <h2>History</h2>
      <hr />
      <ul className="list">

        {activities.map(activity => (
          <List activity={activity} key={activity.id} />
        ))}
        
      </ul>
    </div>
  )
}

export default History