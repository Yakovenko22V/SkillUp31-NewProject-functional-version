import React, { useContext } from "react";
import './input.scss';
import { AppContext } from "../../functions/createContext/createContext";

function InputForSearch() {
    const {filteredByInput} = useContext(AppContext);

    return (
        <input className='inputData' placeholder='Поиск задач' onChange={(e) => filteredByInput(e.target.value)}></input>
    )
}

export default InputForSearch;