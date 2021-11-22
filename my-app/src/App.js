import React, { useEffect, useState } from 'react';
import './App.css';
import './styles-bar.scss';
import './loadingStyle/loadingStyle.scss';
import BtnAllActiveTask from './ComponentsBTN/BtnAllActiveTask/BtnAllActiveTask';
import BtnAllTask from './ComponentsBTN/BtnAllTask/BtnAllTask';
import BtnFinishedTask from './ComponentsBTN/BtnFinishedTask/BtnFinishedTask';
import Input from './ComponentsBTN/Input/Input';
import './TaskList/TaskList'
import TaskList from './TaskList/TaskList';
import Form from './ComponentsBTN/Form/Form';
import { loadData } from './ComponentsBTN/Utils/loadData';


const App = () => {
  const [arrTask, setArrTask] = useState(null);
  const [displayedList, setDisplayedList] = useState('');
  const [filteredArr, setFilteredArr] = useState('');

  const [isArrTaskLoaded, setIsArrTaskLoaded] = useState(false);

  useEffect(() => {
    loadData().then((data) => {
      setArrTask(data)
      setIsArrTaskLoaded(true)
    })
  }, [])

  if (!isArrTaskLoaded) {
    return <div className='loding-block'><div className="lds-circle"><div></div></div><div>Loading</div></div>
  }


  const deleteTask = id => {
    const copyArrTask = [...arrTask];
    const deletElement = copyArrTask.filter((el) => el.idOfTask !== id);
    setArrTask(deletElement);
  };

  const isTaskImportant = id => {
    const importanceOfEl = arrTask.map((el) => el.idOfTask === id
      ? { ...el, flagOfImportance: !el.flagOfImportance }
      : el)
    setArrTask(importanceOfEl)
  };

  const isTasksActive = id => {
    const activityOfEl = arrTask.map((el) => el.idOfTask === id
      ? { ...el, isTaskActive: !el.isTaskActive }
      : el)
    setArrTask(activityOfEl)
  };

  const arrTaskFilter = data => {
    const filterForAllTask = {
      displayedList: data
    }
    setDisplayedList(filterForAllTask.displayedList)
  };

  const filteredByInput = data => {
    const filteredByInputText = {
      filteredArr: data
    }
    setFilteredArr(filteredByInputText.filteredArr)
  };

  const setAdditionalTask = (data) => {
    const arrWithNewTask = [...arrTask];
    arrWithNewTask.push(
      {
        nameOfTask: data,
        idOfTask: Date.now(),
        flagOfImportance: false,
        isTaskActive: true
      });
    setArrTask(arrWithNewTask)
  };

  const newArray = arrTask.filter(item => {
    if (displayedList === 'all') {
      return item
    } else if (displayedList === 'closed') {
      return !item.isTaskActive
    } else if (displayedList === 'allActive') {
      return item.isTaskActive
    } else {
      return item
    }
  })

  const newArrayTwo = newArray.filter(item => {
    if (filteredArr === '') {
      return item
    } else {
      return item.nameOfTask.toLowerCase().includes(filteredArr.toLowerCase())
    }
  });

  return (
    <div className='parent-block'>
      <div className='todo-list'><h1>TODO-List</h1></div>
      <div className='wrapper'>
        <div className='header-bar'>
          <div className='search-block'>
            <Input filteredByInput={filteredByInput} />
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
        <div className='task-container'>
          {
            newArrayTwo.map((item) => (
              <TaskList key={item.idOfTask}
                item={item}
                deleteTask={deleteTask}
                isTaskImportant={isTaskImportant}
                isTasksActive={isTasksActive} />
            ))
          }
        </div>
      </div>
      <div className='fonpicture'></div>
    </div>
  )
}
export default App;