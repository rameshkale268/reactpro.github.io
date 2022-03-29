import React from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
const Navbar = () => {
    return (<>
        
        <div className='container-fluid mb-5 fixed-top' >
            <div className='row mb-5'>
                <div className=' col-12  mx-auto'>
                    <nav className="navbar navbar-expand-lg  bg-dark">
                        <div className="container-fluid"  style={{width:'100%',}}>
                            <NavLink to='/' className="navbar-brand" ><h3 style={{  color: 'whitesmoke' }}>Riddhs <span className='text-info' style={{ fontSize: '25px' }}>Tech.</span></h3></NavLink>
                            <button className="navbar-toggler bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse mt-0" id="navbarSupportedContent">
                                <ul className="navbar-nav m-lg-auto mb-0  mb-lg-0">
                                    <li className="nav-item me-lg-4">
                                        <NavLink to='/' className="NavLink" exact activeClassName='active_class btn-outline-danger' aria-current="page" >Covid-19</NavLink>
                                    </li>
                                    <li className="nav-item me-lg-4">
                                        <NavLink to='/ToDoList' exact activeClassName='active_class btn-outline-danger' className="NavLink" >ToDoList</NavLink>
                                    </li>
                                    <li className="nav-item me-lg-4">
                                        <NavLink to='/FormControl' exact activeClassName='active_class btn-outline-danger' className="NavLink" >SpeedFrame</NavLink>
                                    </li>
                                    <li className="nav-item me-lg-4">
                                        <NavLink to='/TempApp' exact activeClassName='active_class btn-outline-danger' className="NavLink" >Weather report</NavLink>
                                    </li>
                                    <li className="nav-item me-lg-4">
                                        <NavLink to='/Todo' exact activeClassName='active_class btn-outline-danger' className="NavLink" >Todo New</NavLink>
                                    </li>
                                    <li className="nav-item me-lg-4">
                                        <NavLink to='/Example' exact activeClassName='active_class btn-outline-danger' className="NavLink" >Color</NavLink>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    </>);
}
export default Navbar;
