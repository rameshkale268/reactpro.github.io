import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../src/index.css';

const Header = () => {
    return (
        <>
            <div className='container-fluid my-4' >
                <div className='row'>
                    <div className=' col-12 col-10  mx-auto '>
                    
                        <div className='fixed-top '>
                            <h1 className='header'>Riddhs <span className='text-info my-5' style={{ fontSize: '25px' }}>Tech.</span></h1><br />
                            <div className='text-danger ' >
                                <span style={{ fontSize: '20px', position: 'fixed', right: 60, fontWeight: 'Lighter' }} >
                                    <span style={{ marginRight: '15px' }}>  <NavLink className='NavLink  ' exact activeClassName='active_class btn-outline-danger' to='/'>Covid-19</NavLink></span>
                                    <span style={{ marginRight: '15px' }}><NavLink className='NavLink' exact activeClassName='active_class btn-outline-danger' to='/ToDoList'>ToDo List</NavLink></span>
                                    <span style={{ marginRight: '15px' }}><NavLink className='NavLink' exact activeClassName='active_class btn-outline-danger' to='/GoogleKeepComponent'>Keep Note</NavLink></span>
                                    <span style={{ marginRight: '15px' }}><NavLink className='NavLink' exact activeClassName='active_class btn-outline-danger' to='/FormControl'>SF Prdn</NavLink></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}
export default Header;