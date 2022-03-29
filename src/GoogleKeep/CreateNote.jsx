import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddIcon from '@mui/icons-material/Add';
//import { Tooltip } from "@mui/material";
import Button from '@mui/material/Button';
const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
        console.log(note);
    }
    const addEvent = () => {
        props.passNote(note);
        console.log('added');
        // console.log(note);
        setNote({
            title: "",
            content: "",
        });

    };

    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div className='col-sm-4 '></div>
                    <div className=' col-sm-4 card p-5 '>
                        <form>
                            <input
                                type='text'
                                name='title'
                                value={note.title}
                                placeholder="Title"
                                autoComplete='off'
                                onChange={inputEvent} /><br /> <br />
                            <textarea
                                name='content'
                                value={note.content}
                                placeholder="write a notes"
                                onChange={inputEvent}
                                style={{ marginLeft: '50px' }}
                                rows='2' cols='' />

                            <Button onClick={addEvent} className='btnCircle' style={{ position: 'absolute', right: 0, bottom: 0, borderRadius: 80, top: 0 }}><AddIcon /></Button>
                        </form>
                    </div>
                    <div className='col-sm-4 '></div>
                </div>
            </div>

        </>
    );
}
export default CreateNote;