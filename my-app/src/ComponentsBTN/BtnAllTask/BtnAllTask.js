import React, { useContext } from "react";
import { AppContext } from "../../functions/createContext/createContext";

function BtnAllTask() {
    const {arrTaskFilter, activeBtn} = useContext(AppContext);

    let newClassName = 'btn-style'
    if (activeBtn === 'all') {
        newClassName = 'btn-style active'
    }
    return (
        <button className={newClassName} onClick={() => arrTaskFilter('all')}>Все задачи</button>
    )
}

export default BtnAllTask;