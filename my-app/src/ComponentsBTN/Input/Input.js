import React from "react";
import './input.scss';
import PropTypes from 'prop-types';

function Input({ filteredByInput }) {
    return (
        <input className='inputData' placeholder='Поиск задач' onChange={(e) => filteredByInput(e.target.value)}></input>
    )
}

Input.propTypes = {
    filteredByInput: PropTypes.func.isRequired
}

export default Input;