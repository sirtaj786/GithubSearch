import React from 'react'

const Card = ({users}) => {
  return (
    <div>
          {
                users?.map(item=>(<div key={item.id}  >{item.login}</div>))
            } 
    </div>
  )
}

export default Card