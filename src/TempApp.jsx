import React, { useEffect, useState } from 'react';
import './index.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('mumbai');
    
    useEffect(() => {
        
            const fetchApi = async () => {
            
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=eaa89a07b91904dcd849b6030523cf78`
                try{
                const res = await fetch(url);
                //console.log(res);
                const resJson = await res.json();
                console.log(resJson);
                setCity(resJson.main);
            }catch(e){<>
              
            </>}
            };
            fetchApi();
       
        }, [search])
    
       
      



    return (
        <>

            <div className='container-fluid  my-5 mx-auto'>
                <div className='row my-5 mx-auto'></div>
                <div className='row my-5 mx-auto'>
                    <div className='col-md-3 col-10 mx-auto'>
                        <div className='card bg-secondary' style={{ height: '400px', borderRadius: '12px' }}>
                            <input className='my-3 input_Box text-center' type='search' value={search} name='tempSearch' placeholder='City' autoComplete='off' onChange={(event) => { setSearch(event.target.value) }} />
                            {!city ? (<h5 className='text-center  fw-bold'>No City Found</h5>) : (
                                <div>
                                    <div className='text-capitalize text-center my-3'>
                                        <h2 className='text-capitalize text-center' style={{ color: 'whitesmoke' }}> <span><LocationOnIcon style={{ fontSize: '50px ' }} /></span>{search}</h2>
                                    </div>
                                    <h3 className='text-capitalize text-center '>{city.temp}°Cel</h3>

                                    <p className='text-capitalize text-center mb-5'> Min : {city.temp_min}°Cel | Max {city.temp_max}°Cel</p>
                                    <div className='wave -one mt-5'></div>
                                    <div className='wave -two'></div>
                                    <div className='wave -three'></div>

                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>



        </>
    );
}
export default TempApp;