import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { AppContext } from "../../functions/createContext/createContext";

function BtnActive(props) {
    const {id, item } = props
    const {isTasksActive} = useContext(AppContext);

    const changeText = (item.isTaskActive === true) ? "Деактивировать" : "Активировать"

    return (
        <button className='btn-style' onClick={() => isTasksActive(id)}>{changeText}</button>
    )
};

BtnActive.propTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired
}
export default BtnActive;