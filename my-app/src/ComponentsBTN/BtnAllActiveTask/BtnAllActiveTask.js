import React from "react";
import PropTypes from 'prop-types';

function BtnAllActiveTask({ arrTaskFilter, activeBtn }) {

    let newClassName = 'btn-style'
    if (activeBtn === 'allActive') {
        newClassName = 'btn-style active'
    }

    return (
        <button className={newClassName} onClick={() => arrTaskFilter('allActive')}>Активные задачи</button>
    )
};

BtnAllActiveTask.propTypes = {
    arrTaskFilter: PropTypes.func.isRequired,
    activeBtn: PropTypes.string.isRequired
}

export default BtnAllActiveTask;