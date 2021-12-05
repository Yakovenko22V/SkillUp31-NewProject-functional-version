import React, { useContext } from "react";
import { AppContext } from "../../functions/createContext/createContext";

function BtnAllActiveTask() {
    const {arrTaskFilter, activeBtn} = useContext(AppContext);

    let newClassName = 'btn-style'
    if (activeBtn === 'allActive') {
        newClassName = 'btn-style active'
    }

    return (
        <button className={newClassName} onClick={() => arrTaskFilter('allActive')}>Активные задачи</button>
    )
};

export default BtnAllActiveTask;