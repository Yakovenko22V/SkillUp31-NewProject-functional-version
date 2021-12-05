import React from 'react'

import BtnAllTask from '../../ComponentsBTN/BtnAllTask/BtnAllTask.js'
import BtnAllActiveTask from '../../ComponentsBTN/BtnAllActiveTask/BtnAllActiveTask'
import BtnFinishedTask from '../../ComponentsBTN/BtnFinishedTask/BtnFinishedTask'
import Form from '../Form/Form'
import InputForSearch from '../InputForSearch/InputForSearch'

function HeaderBar() {
    
    return (
        <div className='header-bar'>
            <div className='search-block'>
                <InputForSearch/>
                <div className='buttons-sort'>
                    <BtnAllTask/>
                    <BtnAllActiveTask />
                    <BtnFinishedTask />
                </div>
            </div>
            <div className='add-task-block'>
                <Form />
            </div>
        </div>
    )
}

export default HeaderBar
