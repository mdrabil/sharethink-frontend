import React, { createContext, useState } from 'react'
export const myContext =createContext()
const Providor = ({children}) => {
   const [name,setname] = useState("hello")

     return (
    <>
<myContext.Provider value={{name}}>
    {children}
 </myContext.Provider>
    </> )
}

export default Providor