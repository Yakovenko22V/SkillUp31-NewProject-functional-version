import React from 'react'

import BtnAllTask from '../../ComponentsBTN/BtnAllTask/BtnAllTask.js'
import BtnAllActiveTask from '../../ComponentsBTN/BtnAllActiveTask/BtnAllActiveTask'
import BtnFinishedTask from '../../ComponentsBTN/BtnFinishedTask/BtnFinishedTask'
import Form from '../Form/Form'
import InputForSearch from '../InputForSearch/InputForSearch'

function HeaderBar(props) {
    
    const{filteredByInput, arrTaskFilter, displayedList,setAdditionalTask} = props

    return (
        <div className='header-bar'>
            <div className='search-block'>
                <InputForSearch filteredByInput={filteredByInput} />
                <div className='buttons-sort'>
                    <BtnAllTask arrTaskFilter={arrTaskFilter} activeBtn={displayedList} />
                    <BtnAllActiveTask arrTaskFilter={arrTaskFilter} activeBtn={displayedList} />
                    <BtnFinishedTask arrTaskFilter={arrTaskFilter} activeBtn={displayedList} />
                </div>
            </div>
            <div className='add-task-block'>
                <Form setAdditionalTask={setAdditionalTask} />
            </div>
        </div>
    )
}

export default HeaderBar
