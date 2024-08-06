'use client'

import { 
    createContext, 
     Dispatch,
     ReactNode, 
     SetStateAction, 
     useState } from "react"
import { useSession } from "next-auth/react";
import Spinner from "@/components/spinner/indext";


type ContextType={
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
}

const initialState ={
    loading: false,
    setLoading: () => {}
}

export const GlobalContext = createContext<ContextType>(initialState)

export default function Globalstate({children}: {children : ReactNode}){

    const [loading, setLoading] = useState(false)
    const {data: session} = useSession();

    if(session === undefined) return <Spinner/>

    return( 
    <GlobalContext.Provider  value={{loading, setLoading}}> {children} </ GlobalContext.Provider>
)

}