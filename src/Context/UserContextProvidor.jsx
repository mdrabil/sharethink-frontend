import React, { useState } from 'react'
import usercontext from './UserContext'
const UserContextProvidor = ({children}) => {
    const [fname,setfname] = useState()
  return (
    <>

<usercontext.Provider value={{fname,setfname}}>
    {children}
</usercontext.Provider>

    </>
  )
}

export default UserContextProvidor