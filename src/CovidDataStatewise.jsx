import React, { useEffect, useState } from 'react';
import { Tooltip } from "@mui/material";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Loading from './Loading';
const CovidDataStatewise = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const getCovidData = async () => {
       try{ const res = await fetch('https://data.covid19india.org/data.json');
       setLoading(false);
        const actualData = await res.json();
        setData(actualData.statewise);
     //   console.log(actualData.statewise);
    }catch(e){
        setLoading(false);
     //   alert(e);
     //    <i  style={{position:'absolute',top:'500px'}} class="fad fa-spinner my-5"></i>

    }
    }   
    useEffect(() => {
        getCovidData();                     
    },[]);
    
    
    if(loading)
    {
       
        return<Loading />
    }
    return (
        
        <>
            <div className='container-fluid' style={{marginTop:'70px'}}>
                
                <h1 className='text-center text-secondary ' >INDIA'S STATE WISE
                    <span className='text-danger'> COVID-19
                    </span> DASHBOARD
                </h1>
                <div className='table-responsive'  style={{marginTop:'0px'}}>
                    <table className='table mb-5' >
                        <thead className="thead-dark bg-dark text-white" >
                            <tr >
                            <th>SR no</th>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Recovered % </th>
                                <th>Deaths</th>
                                <th>Deaths % </th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                       </thead>
                        
                        <tbody>
                            {
                                data.map((curElem,ind) => {
                                        
                                    return (<>
                                        
                                        <tr key={ind}>
                                        <th>{ind}</th>
                                            <th>{curElem.state}</th>
                                            <Tooltip title='Confirmed'>
                                                <td>{curElem.confirmed}</td>
                                            </Tooltip>
                                            <Tooltip title='Recovered'>
                                            <td>{curElem.recovered}</td>
                                            </Tooltip>
                                            <Tooltip title='Recover %'>
                                            <td>{
                                                (curElem.confirmed>0)?
                                                ((curElem.recovered)/(curElem.confirmed)*100).toFixed(2)
                                                
                                               :0
                                                
                                                }</td>
                                            </Tooltip>
                                            <Tooltip title='Deaths'>
                                            <td>{curElem.deaths}</td>
                                            </Tooltip>
                                            <Tooltip title='Death % '>
                                            <td>{
                                                (curElem.confirmed>0)?
                                                ((curElem.deaths)/(curElem.confirmed)*100).toFixed(2)
                                                :0
                                                }</td>
                                            </Tooltip>
                                            <Tooltip title='Active'>
                                                 <td>{curElem.active}</td>
                                            </Tooltip>
                                                                            
                                            <Tooltip title='Updated Time'>                                                                   
                                            <td>{curElem.lastupdatedtime}</td>
                                            </Tooltip>
                                        </tr>
                                        
                                    </>
                                    );

                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>


        </>
    );}

export default CovidDataStatewise;