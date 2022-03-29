import React, { useState, useRef } from 'react'

const UseRefExample = () => {
    const luckyName = useRef(null);
    const [show, setShow] = useState(false);
    const submitForm=(e)=>{
        e.preventDefault();
        const name =luckyName.current.value;
        console.log(luckyName.current.value);
        name==='' ? alert('plz fill data'): setShow(true);
    }
    return (
        <>
            <div className='container-fluid my-5 mx-auto'>
                <div className='row my-5 mx-auto'>
                    <div className='col-6 my-5 mx-auto'>
                        <form action="" onSubmit={submitForm}>
                            <div className='form-control mx-auto '>
                                <label htmlFor="name">name</label>
                                <input type="text" id='luckyName1' ref={luckyName} />
                                <br />
                                <button>submit</button>
                            </div>
                        </form>
                        <p>{show ?`your c value ${luckyName.current.value}`:''}</p>
                         
                    </div>

                </div>
            </div>
        </>
    )
}

export default UseRefExample

