import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Example = () => {
    const initialState = 'black';
    const [colorCode, setColorCode] = useState(initialState)
    const [headName, setHeadName] = useState(colorCode);
    const clickBtn = () => {
        //     let val=colorCode;
        //    (val===colorCode)?setHeadName(colorCode): setHeadName('black')
        setHeadName(colorCode);


    }
    return (
        <>

            <div className='container-fluid'>
                <div className='row mt-5'>
                    <div className=' col-10 mx-auto'>

                    </div>
                </div>

                <div className='row mt-5'>
                    <div className=' col-10 mx-auto'>
                        <div className="text-center text-capitalize mb-5">
                            <input type='text' placeholder='enter color' className='text-center text-capitalize' onChange={(event) => setColorCode(event.target.value)}></input>
                            {/* <h1 style={{color:`${headName}`}}>{headName}</h1> */}
                            <h1 >your Color is :<span style={{ color: `${colorCode}` }}>{colorCode}</span></h1>
                            <button className='btn text-capitalize text-center' style={{ backgroundColor: `${colorCode}`, width: '100px', height: '100px' }} onClick={clickBtn}></button>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Example
