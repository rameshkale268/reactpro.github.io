import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Header from "./Header";
// import Footer from './Footer';
import CreateNote from "./CreateNote";
import Notes from "./Notes";

const GoogleKeepComponent = ()=>{
    const [addItems,SetAddItem]= useState([]);

    const addNote=(note)=>{
        //alert('clicked')
        SetAddItem((oldData)=>{
            return [...oldData,note];
        });
//        console.log(note);
    };
        const onDelete=(id)=> {
             SetAddItem ((oldItems) => {
                return oldItems.filter((arrElem, index) => {
                    return index !== id;
                });
    
            });
        };
    return (
            <>     
            <CreateNote passNote={addNote} />
         
              { addItems.map((val,index)=>{
                    return(<> <Notes 
                                    key={index} 
                                    id={index} 
                                    title={val.title} 
                                    content={val.content} 
                                    deleteItem={onDelete} /> 
                                    </>                 
              );})} 
        </>
    );
}
export default GoogleKeepComponent;