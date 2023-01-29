const CheckUser = () => {
    const isUserLogin = false
    return new Promise( ( resolve, reject ) => {
        if ( isUserLogin ) {
            resolve( "User Login" )
        }
        else {
            reject( new Error( "User Is Not Login" ) )
        }
    } )
}

export default CheckUser