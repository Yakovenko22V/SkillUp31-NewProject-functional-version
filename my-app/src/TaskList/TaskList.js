import React from "react";
import BtnDelete from "../ComponentsBTN/BtnDelete/BtnDelete";
import BtnImportance from "../ComponentsBTN/BtnImpotance/BtnImportance";
import './TaskList.scss';
import TaskItem from "./TaskItem/TaskItem";
import BtnActive from "../ComponentsBTN/BtnActive/BtnActive";
import PropTypes from 'prop-types';

function TaskList({item}) {

    return (
        <div>
            <ul className='listOfTask'>
                <div className={(item.isTaskActive === false) ? 'non-active-style' : ''}>
                <TaskItem itemT={item.nameOfTask} title='Задача:'/>
                <TaskItem itemT={item.flagOfImportance} itemN={item.isTaskActive} title='Важна ли задача:'/>
                </div>
                <BtnDelete id={item.idOfTask}/>
                <BtnImportance id={item.idOfTask}/>
                <BtnActive item={item} id={item.idOfTask}/>
                <hr className='hrLine' />
            </ul>
        </div>
    )
};

TaskList.propTypes = {
    item: PropTypes.object.isRequired,
}

export default TaskList;
