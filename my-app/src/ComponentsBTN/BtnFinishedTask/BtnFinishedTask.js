import React, { useContext } from "react";
import { AppContext } from "../../functions/createContext/createContext";

function BtnFinishedTask() {
    const {arrTaskFilter, activeBtn} = useContext(AppContext);
    
    let newClassName = 'btn-style'
    if (activeBtn === 'closed') {
        newClassName = 'btn-style active'
    }

    return (
        <button className={newClassName} onClick={() => arrTaskFilter('closed')}>Завершенные задачи</button>
    )
};

export default BtnFinishedTask