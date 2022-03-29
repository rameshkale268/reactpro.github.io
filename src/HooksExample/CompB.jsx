import React, { useContext } from 'react';
import CompC from './CompC';
import { FirstName, LastName } from './CreateContextEx';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const CompB=()=>{
    const fname=useContext(FirstName);
    const lname=useContext(LastName);
    
    return (
        <>
        <CompC/>
        <h1 className='text-center text-capitalize text-secondary'>i am from useContext, my name first name : {fname} and last name :{lname} </h1>    
        </>
    );
}
export default CompB;