import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { AppContext } from "../../functions/createContext/createContext";

function BtnDelete(props) {
    const {id} = props
    const {deleteTask} = useContext(AppContext);
    return (
        <button className='btn-style' onClick={() => deleteTask(id)}>Удалить задачу</button>
    )
};

BtnDelete.propTypes = {
    id: PropTypes.number.isRequired
}

export default BtnDelete;