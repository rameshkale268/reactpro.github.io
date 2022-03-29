import React, { createContext } from 'react';
import CompA from './CompA';
const FirstName = createContext();
const LastName = createContext();
const CreateContextEx = () => {

    return (<>
        <FirstName.Provider value={'ramesh'}>
            <LastName.Provider value={'kale'}>
                <CompA />
            </LastName.Provider>
        </FirstName.Provider>

    </>);
}
export default CreateContextEx;
export { FirstName, LastName };