/*
import React, {  useState } from 'react';
import SpeedFrameMc from './SpeedFrameMc';
const FormControl = () => {
    const [actualHK, sfPrdnCal] = useState(
        {
          
        }
    );

// useEffect(()=>{
//     arrayEle();
   
// })
        
//

    const inputEvent = (event) => {
        const { name, value } = event.target;

        sfPrdnCal((preVal) => {
           console.log(preVal);

            return {
                ...preVal,
                [name]: value,
            };
        });
    };
    return (
        <>
            <div className="container" style={{marginTop:'100px'}}>
                <h2>PRODUCTION CALCULATION</h2>
                <table className="table table-bordered center">
                    <thead>
                        <tr>
                            <th>M/C NO</th>
                            <th>ROV. HK</th>
                            <th>SPEED</th>
                            <th>TPI</th>
                            <th>100 % HK</th>
                            <th>ACTUAL HK</th>
                            <th>PRDN IN KG</th>
                            <th>EFFI %</th>
                        </tr>
                    </thead>
                    
                           
                    <tbody className='center'>

                      {
                        SpeedFrameMc.map((data,index)=>{
                            return(<>
                                <tr style={{ textAlign: 'center' }}>
                            <td><input disabled type="text" className="form-control" value={data} name={`sfMcNo${index}`} /></td>
                            <td><input type="text" className="form-control" name= {`sfRovHk${index}`} onChange={inputEvent} /></td>
                            <td><input type="text" className="form-control" name= {`sfSpeed${index}`}  onChange={inputEvent} /></td>
                            <td><input type="text" className="form-control" name= {`sfTPI${index}`} onChange={inputEvent} /></td>
                            <td><input
                                disabled
                                type="text"
                                className="form-control"
                                name ={`HK100${index}`}
                                value={
                                    (actualHK.sfTPI > 0 || actualHK.sfTPI>0) ?
                                    (Number(actualHK.sfSpeed) / Number(actualHK.sfTPI) / 63).toFixed(2) : 0}
                                onChange={inputEvent}
                            />
                            </td>
                            <td><input type="text" className="form-control" name= {`sfActualHK${index}`} onChange={inputEvent} /></td>
                            <td>
                                <input

                                    disabled
                                    type="text"
                                    className="form-control"
                                    name={`sfPrdn${index}`}
                                    value={0}
                                /></td>
                            <td>
                                <input
                                    disabled
                                    type="text"
                                    className="form-control"
                                    name= {`sfEffi${index}`}
                                    value={
                                        (actualHK.sfActualHK > 0) ?
                                            ((Number(actualHK.sfActualHK)) / ((Number(actualHK.sfSpeed) / Number(actualHK.sfTPI) / 63)) * 100).toFixed(2) : 0}
                                />
                            </td>
                        </tr>
                            </>);
                        })
                      }
                        
                    </tbody>
                </table>
               
            </div>
        </>
    );
}
export default FormControl;*/
import React, {  useState } from 'react';
import SpeedFrameMc from './SpeedFrameMc';
import './index.css';
const FormControl = () => {
    const [actualHK, sfPrdnCal] = useState(
        {
            sfMcNo: '',
            sfRovHk: '',
            sfSpeed: '',
            sfTPI: '',
            HK100: '',
            sfActualHK: '',
            sfPrdn: '',
            sfEffi: '',
        }
    );

    


    const inputEvent = (event) => {
        const { name, value } = event.target;

        sfPrdnCal((preVal) => {
     //      console.log(preVal);

            return {
                ...preVal,
                [name]: value,
            };
        });
    };
    return (
        <>
            <div className="container" style={{marginTop:'70px'}}>
                <h4 className='text-capitalize'>Speed Frame Pro'd'n Calculation</h4>
                <table className="table table-bordered center">
                    <thead>
                        <tr>
                            <th>M/C NO</th>
                            <th>ROV. HK</th>
                            <th>SPEED</th>
                            <th>TPI</th>
                            <th>100 % HK</th>
                            <th>ACTUAL HK</th>
                            <th>PRDN IN KG</th>
                            <th>EFFI %</th>
                        </tr>
                    </thead>
                    
                           
                    <tbody>

                      {
                        SpeedFrameMc.map((data,index)=>{
                            return(<>
                                <tr key={index}>
                            <td><input disabled type="text" className="form-control center" value={ index+1} name='sfMcNo' /></td>
                            <td><input type="text" className="form-control center" name='sfRovHk' onChange={inputEvent} /></td>
                            <td><input type="text" className="form-control center" name= "sfSpeed"  onChange={inputEvent} /></td>
                            <td><input type="text" className="form-control center" name= "sfTPI" onChange={inputEvent} /></td>
                            <td><input
                                disabled
                                type="text"
                                className="form-control center"
                                name ="HK100"
                                value={
                                    (actualHK.sfTPI > 0 || actualHK.sfTPI>0) ?
                                    (Number(actualHK.sfSpeed) / Number(actualHK.sfTPI) / 63).toFixed(2) : 0}
                                onChange={inputEvent}
                            />
                            </td>
                            <td><input type="text" className="form-control center" name= "sfActualHK" onChange={inputEvent} /></td>
                            <td>
                                <input

                                    disabled
                                    type="text"
                                    className="form-control center"
                                    name="sfPrdn"
                                    value={ 
                                        (actualHK.sfRovHk > 0 || actualHK.sfActualHK>0) ?
                                        (Number(actualHK.sfActualHK) / 2.2 / 0.95 * 160).toFixed(2):0}
                                /></td>
                            <td>
                                <input
                                    disabled
                                    type="text"
                                    className="form-control center"
                                    name= "sfEffi"
                                    value={
                                        (actualHK.sfActualHK > 0) ?
                                            ((Number(actualHK.sfActualHK)) / ((Number(actualHK.sfSpeed) / Number(actualHK.sfTPI) / 63)) * 100).toFixed(2) : 0}
                                />
                            </td>
                        </tr>
                            </>);
                        })
                      }
                        
                    </tbody>
                </table>
               
            </div>
        </>
    );
}
export default FormControl;