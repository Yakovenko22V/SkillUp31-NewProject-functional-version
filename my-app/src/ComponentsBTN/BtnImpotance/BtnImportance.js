import React from "react";
import PropTypes from 'prop-types';

function BtnImportance(props) {
    const { isTaskImportant, id } = props
    return (
        <button className='btn-style' onClick={() => isTaskImportant(id)}>Пометить задачу как важнаю</button>
    )
}

BtnImportance.propTypes = {
    isTaskImportant: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}

export default BtnImportance;