import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Footer =()=>{
    const year=new Date().getFullYear();
    return(
        <>
            
            <p className=' footer text-center text-capitalize mt-5'>copyright &copy;  {year}</p>
        </>
    );
}
export default Footer; 