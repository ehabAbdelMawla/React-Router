import React from 'react';
import AnimatedPage from '../pages/AnimationPage'
const WithAnimation = ( Component: any ) => {
    return ( props: any ) => <AnimatedPage><Component { ...props } /></AnimatedPage>
}

export default WithAnimation