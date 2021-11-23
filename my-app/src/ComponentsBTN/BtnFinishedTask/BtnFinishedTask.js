import React from "react";
import PropTypes from 'prop-types';

function BtnFinishedTask({ arrTaskFilter, activeBtn }) {
    console.log(activeBtn);
    let newClassName = 'btn-style'
    if (activeBtn === 'closed') {
        newClassName = 'btn-style active'
    }

    return (
        <button className={newClassName} onClick={() => arrTaskFilter('closed')}>Завершенные задачи</button>
    )
};

BtnFinishedTask.propTypes = {
    arrTaskFilter: PropTypes.func.isRequired,
    activeBtn: PropTypes.string.isRequired
}

export default BtnFinishedTask