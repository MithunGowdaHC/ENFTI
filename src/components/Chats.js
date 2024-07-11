
import React from 'react'
import Contacts from './Contacts'

const Chats = ({onselectContact}) => {
  return (
    <div className=' ml-72  w-3/12'>
      <Contacts onselectContact={onselectContact} />
    </div>
  )
}

export default Chats


