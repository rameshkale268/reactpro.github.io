import React, { useState, useEffect } from 'react';
//getting data from local storage
const getLocalData = () => {
    const list = localStorage.getItem('myTODOList');
    if (list) { return JSON.parse(list); }
    else { return [] }
}
//defining functional component
const Todo = () => {
    const [item, setItem] = useState('');//input data
    const [itemList, setItemList] = useState(getLocalData);//input data add in array
    const [toggleSubmit, settoggleSubmit] = useState(true);//on edit click change icon
    const [isEditItem, setIsEditItem] = useState(null); // change state in edit
    const [removeAll, setremoveAll] = useState(false);//remove all data from todo list
    //adding item in ToDo List
    const addItem = () => {
        if (!item) {
            alert('This Field Should not Empty');
        } else if (item && !toggleSubmit) {
            setItemList(
                itemList.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: item }
                    }
                    return elem;
                })
            )
            settoggleSubmit(true);
            setItem('');
            setIsEditItem(null);
        }
        else {
            // create id value
            const allInputData = { id: new Date().getTime().toString(), name: item };
            setItemList([...itemList, allInputData]);
            setItem('');
            setremoveAll(true);
        }
    }
    //deleting item from todolist
    const deleteItem = (ind) => {
        const updateData = itemList.filter((elem) => {
            return ind !== elem.id;
        });
        setItemList(updateData);
        if (itemList.length === 1) {
            alert('All items are Deleted')
            setremoveAll(false)
        }
    }
    //edit todo list
    const editItem = (id) => {
        let newEditItem = itemList.find((ele) => {
            return ele.id === id;
        });
        settoggleSubmit(false);
        setItem(newEditItem.name);
        setIsEditItem(id);
    }
    const removeAllItem = () => {
        setItemList([]);
        setremoveAll(false);
        alert('All Item Deleted');
    }
//Use useEffect for store data to local storage on each rendering
    useEffect(() => {
        if (itemList.length >= 1) {
            setremoveAll(true);
        }
        else { setremoveAll(false); }
        localStorage.setItem('myTODOList', JSON.stringify(itemList))
    }, [itemList]);
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className=' col-10 my-5 mx-auto'>
                    </div>
                </div>
                <div className='row mb-5'>
                    <div className=' col-4 mx-auto'>
                        <div className='card'>
                            <div className='card-header text-center bg-secondary text-light'>
                                <h1>ToDo List</h1>
                            </div>
                            <div className='card-body text-center'>
                                <div className='table-responsive'>
                                    <input
                                        className='text-center col-10 my-2 p-2'
                                        type="text"
                                        placeholder='Add New Item'
                                        value={item}
                                        onChange={(event) => { setItem(event.target.value) }}
                                    />
                                    {toggleSubmit ? <i className="fa fa-plus text-success fs-4"
                                        style={{
                                            position: 'relative',
                                            left: '-30px',
                                            top: '0px',
                                            color: 'gray',
                                        }} onClick={addItem} />
                                        : <i className=" fa fa-floppy-o text-success fs-4"
                                            style={{
                                                position: 'relative',
                                                left: '-30px',
                                                top: '0px',
                                                color: 'gray',
                                            }} onClick={addItem} />}
                                </div>
                                <hr />
                                {itemList.map((val) => {
                                   
                                    return (
                                        <>
                                            <div  className=' col-10 mx-auto text_left table-responsive text-capitalize border rounded-pill border-secondary my-2' >
                                                <h4  key={val.id} className='my-2 text-secondary' style={{ marginLeft: '25px' }}  >
                                                    {val.name}
                                                    <span className='text-light' style={{ position: 'absolute', right: '50px' }}>
                                                        <i className="fa fa-edit text-success fs-4" style={{ marginRight: '15px' }} aria-hidden="true" onClick={() => editItem(val.id)} />
                                                        <i className="fa fa-trash-o text-danger fs-4" style={{ marginRight: '15px' }} aria-hidden="true" onClick={() => deleteItem(val.id)} />
                                                    </span>
                                                </h4>
                                            </div>
                                        </>
                                    )
                                })
                                }
                                {removeAll ?
                                    <i className=" fa fa-trash-o text-danger fw-bold fs-4 mt-2 mb-2"
                                        style={{ marginRight: '15px' }}
                                        aria-hidden="true"
                                        onClick={() => removeAllItem()} > All Items</i> : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Todo;