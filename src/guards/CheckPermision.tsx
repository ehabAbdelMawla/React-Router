const CheckPermision = ( permision: string ) => {
    const permisions = [ "Add", "Edit" ]
    return () => {
        return new Promise( ( resolve, reject ) => {
            if ( permisions.indexOf( permision ) != -1 ) {
                resolve( "pass" )
            }
            else {
                reject( new Error( "Permision Denied" ) )
            }
        } )
    }
}

export default CheckPermision