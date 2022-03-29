import React from 'react';
import Button from '@mui/material/Button';
//import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from "@mui/material";
import DeleteIcon from '@material-ui/icons/Delete';


const Notes=(props)=>{
    const deleteNote=()=>{
        props.deleteItem(props.id);   
    }
    return (
        <>
            
            <div className='col-sm-2 card'  style={{padding:'0px', float:'left'}}>
               <div className='card-header'>
                   <p className='text-capitalize'>{props.title}<span style={{position:'absolute', right:-10, top:-5 }}>   <Tooltip title="Delete">
                        <Button style={{ margin: '10px' }} className='btn_red' onClick={deleteNote}  >
                            <DeleteIcon />
                        </Button>
                    </Tooltip></span></p>
                 
               </div> 
               <div className='card-body'>
                   <p className='text-capitalize'>{props.content}</p>
                  
               </div> 
            </div>
            
        </>
    );
}
export default Notes;