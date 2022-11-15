import { createContext, useState } from "react"

export const Context=createContext()

const States=({children})=>{
   const [news,setNews]=useState(null)

    return(
        <Context.Provider value={{post:[news,setNews]}}>
        {children}
        </Context.Provider>
    )
}

export default States