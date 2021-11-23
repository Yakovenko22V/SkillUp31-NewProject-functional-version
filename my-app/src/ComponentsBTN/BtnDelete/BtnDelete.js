import React from "react";
import PropTypes from 'prop-types';

function BtnDelete(props) {
    const { deleteTask, id } = props
    return (
        <button className='btn-style' onClick={() => deleteTask(id)}>Удалить задачу</button>
    )
};

BtnDelete.propTypes = {
    deleteTask: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}

export default BtnDelete;