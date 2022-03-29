import React, { useState } from 'react';
import './index.css';
const FormcontrolSpredOp = () => {
    const [fullName, setFullName] = useState(
        {
            fname: '',
            lname: '',
            mobile: '',
        });
    const onSubmits = (event) => {
        event.preventDefault();

    };
    const inputEvent = (e) => {
        //  console.log(e.target.value);
        //   console.log(e.target.name);
        const { name, value } = e.target;
        setFullName((preValue) => {
            console.log(preValue);
            return {
                ...preValue,//spread operator
                [name]: value,
            };
        });


    }

    return (
        <>

            <div className="container heading">
                <h2>My Name {fullName.fname} {fullName.lname}</h2>
                <p>{fullName.mobile}</p>
                <form onSubmit={onSubmits} >
                    <div className="form-group">
                        <input type="text" className="form-control" id="fname" placeholder="Enter first name" name="fname" onChange={inputEvent} />
                    </div><br />
                    <div className="form-group">
                        <input type="text" className="form-control" id="lname" placeholder="Enter last name" name="lname" onChange={inputEvent} />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="text" className="form-control" id="mobile" placeholder="Enter mob no" name="mobile" onChange={inputEvent} />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>

    );
}
export default FormcontrolSpredOp;