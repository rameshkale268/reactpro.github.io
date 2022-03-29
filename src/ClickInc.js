import React, { useState } from "react";
import './index.css';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from "@mui/material";
import Button from '@mui/material/Button';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const ClickInc = () => {

    const [count, incCount] = useState(0);


    const incrNum = () => {
        if (count >= 0) {
            incCount(count + 1);
        }
    }
    const decrNum = () => {
        if (count > 0) {
            incCount(count - 1);
        }
        else alert("number is 0");

    }

    return (
        <>
            <div className="main_div" style={{ height: '50vh' }} >
                <div className='center_div' style={{ height: '30vh' }}>
                    <h1 className='headingClass'>{count}</h1>
                    <br />
                    <Tooltip title="Add">
                        <Button style={{ margin: '10px' }} className='btn_green' onClick={incrNum} >
                            <AddIcon />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button style={{ margin: '10px' }} className='btn_red' onClick={decrNum} >
                            <DeleteIcon />
                        </Button>
                    </Tooltip>
                </div>
            </div>
        </>

    );
}
export default ClickInc;