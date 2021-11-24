import React from "react";
import './input.scss';
import PropTypes from 'prop-types';

function InputForSearch({ filteredByInput }) {
    return (
        <input className='inputData' placeholder='Поиск задач' onChange={(e) => filteredByInput(e.target.value)}></input>
    )
}

InputForSearch.propTypes = {
    filteredByInput: PropTypes.func.isRequired
}

export default InputForSearch;