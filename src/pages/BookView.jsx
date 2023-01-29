import React from 'react';
import WithAnimation from '../components/AnimationHoc'
import {
    useParams
  } from "react-router-dom";
const BookView = () => {
    const {id} = useParams()
    return <h1 className='books'>BookView {id}</h1>;
}

export default WithAnimation(BookView)