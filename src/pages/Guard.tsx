import React, { useState } from 'react'
import { Outlet, Navigate } from "react-router-dom"



const Guard = ( { canActivated }: { canActivated: any[] } ) => {
    const [ status, setStatus ] = useState( "pending" )
    Promise.all( canActivated.map( fun => fun() ) ).then( res => {
        setStatus( "fulfilled" )
    } ).catch( error => {
        setStatus( "rejected" )
    } )
    return status === "pending" ? <></> : status === "fulfilled" ? <Outlet /> : <Navigate to={ "/login" } />
}


export default Guard