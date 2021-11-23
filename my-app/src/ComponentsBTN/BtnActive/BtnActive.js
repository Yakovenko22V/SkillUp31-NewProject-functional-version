import React from "react";
import PropTypes from 'prop-types';

function BtnActive(props) {
    const { isTasksActive, id, item } = props

    const changeText = (item.isTaskActive === true) ? "Деактивировать" : "Активировать"

    return (
        <button className='btn-style' onClick={() => isTasksActive(id)}>{changeText}</button>
    )
};

BtnActive.propTypes = {
    isTasksActive: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired
}
export default BtnActive;