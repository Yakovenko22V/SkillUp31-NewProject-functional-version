import React from "react";

function TaskItem(props) {
    return (
        <div>{props.title} '
            <span className={(props.itemT.length) ? 'span-task' : (props.itemT ? 'span-import green' : 'span-import black')} id={(props.itemN===false) ? 'non-active-style' : ''}>
            {
            (props.itemT.length) ?
            props.itemT : (props.itemT ? 'Да' : 'Нет')
            }
             </span>'
        </div>
    )
}

export default TaskItem;