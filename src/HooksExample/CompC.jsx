import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FirstName, LastName } from './CreateContextEx';
//import  {FirstName} from './CreateContextEx';


const CompC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <>
                            <LastName.Consumer>
                                {(lname) => {
                                    return (<>
                                        <h1 className='text-capitalize text-center text-success'>hello, my name is {fname} {lname}
                                        </h1>
                                    </>)
                                }}
                            </LastName.Consumer>

                        </>
                    )
                }}
            </FirstName.Consumer>
        </>);
}
export default CompC;