import React, { useState } from "react"

const Form = ({setAdditionalTask}) => {

    const [inputTextForAdd, setInputTextForAdd] = useState('');

    const getAdditionalText = (data) => {
        const additionalTask = {
            inputTextForAdd: data
        }
        setInputTextForAdd(additionalTask.inputTextForAdd);
    };

    const disableBtnProps = () => (inputTextForAdd === undefined ||
        inputTextForAdd === '' ||
        inputTextForAdd.replace(/\s/g, "") === "") ? true : false;
    const setClassName = () => (disableBtnProps() === true) ? 'ds' : 'btn-style'
    
        return (
            <div className='tools-to-add'>
                <input placeholder='Создать задачу' onChange={(e) => getAdditionalText(e.target.value)}></input>
                <button className={setClassName()} disabled={disableBtnProps()} onClick={() => setAdditionalTask(inputTextForAdd)}>Добавить задачу</button>
            </div>
        )
    }
export default Form;