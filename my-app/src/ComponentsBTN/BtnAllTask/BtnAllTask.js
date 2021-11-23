import React from "react";
import PropTypes from 'prop-types';

function BtnAllTask({ arrTaskFilter, activeBtn }) {

    let newClassName = 'btn-style'
    if (activeBtn === 'all') {
        newClassName = 'btn-style active'
    }
    return (
        <button className={newClassName} onClick={() => arrTaskFilter('all')}>Все задачи</button>
    )
}

BtnAllTask.propTypes = {
    arrTaskFilter: PropTypes.func.isRequired,
    activeBtn: PropTypes.string.isRequired
}

export default BtnAllTask;