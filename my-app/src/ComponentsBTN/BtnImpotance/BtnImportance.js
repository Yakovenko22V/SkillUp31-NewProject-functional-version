import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { AppContext } from "../../functions/createContext/createContext";

function BtnImportance(props) {
    const {id} = props;
    const {isTaskImportant} = useContext(AppContext);

    return (
        <button className='btn-style' onClick={() => isTaskImportant(id)}>Пометить задачу как важнаю</button>
    )
}

BtnImportance.propTypes = {
    id: PropTypes.number.isRequired
}

export default BtnImportance;