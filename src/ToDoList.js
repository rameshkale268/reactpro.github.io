import React, { useState } from 'react';
import ToDoComponent from './ToDoComponent';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

import './index.css';
const ToDoList = () => {
    const [itemlist, setItemList] = useState("");
    const addLits = (event) => {
        setItemList(event.target.value);
    };
    const [itemsarr, setItems] = useState([]);
    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, itemlist];
        });
        setItemList("");
    };
    const deleteItems = (id) => {
        console.log("deleted");
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });

        });
    }


    return (
        <>
            <div className='main_div'  style={{marginTop:'65px'}}>
                <div className='center_div'>
                    <h1 className="headingClass">ToDoList</h1>
                    <br />
                    <input type='text' className="inputcls" name='items' value={itemlist} placeholder='Add a Items' onChange={addLits} />
                    <Tooltip title="Add a Items">
                    <button className='buttontd' onClick={listOfItems}> <AddIcon/></button>
                     </Tooltip>                    
                    <ol>
                        {/* <li>{itemlist.items}</li> */}
                        {itemsarr.map((itemval, index) => {
                            return <ToDoComponent key={index} id={index} text={itemval} onSelect={deleteItems} />
                        })}
                    </ol>
                </div>
            </div>
        </>

    );

}
export default ToDoList;