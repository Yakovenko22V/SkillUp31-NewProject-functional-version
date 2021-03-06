import React, { useEffect, useState } from 'react';
import './App.css';
import './styles-bar.scss';
import './TaskList/TaskList'
import TaskList from './TaskList/TaskList';
import { loadData } from './Utils/loadData';
import PreLoadingPage from './Components/PreLoadingPage/PreLoadingPage';
import { filterForArray } from './functions/filterForArray/filterForArray';
import HeaderBar from './Components/HeaderBar/HeaderBar';
import { AppContext } from './functions/createContext/createContext';


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
    return <PreLoadingPage />
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

  const setAdditionalTask = data => {
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

  return (
    <div className='parent-block'>
      <div className='todo-list'><h1>TODO-List</h1></div>
      <div className='wrapper'>
        <AppContext.Provider value={{
          filteredByInput: filteredByInput,
          arrTaskFilter: arrTaskFilter,
          activeBtn: displayedList,
          setAdditionalTask: setAdditionalTask
        }}>
          <HeaderBar />
        </AppContext.Provider>
        <div className='task-container'>
          {
            filterForArray({ array: arrTask, condition1: displayedList, condition2: filteredArr }).map((item) => (
              <AppContext.Provider key={item.idOfTask} value={{
                deleteTask: deleteTask,
                isTaskImportant: isTaskImportant,
                isTasksActive: isTasksActive
              }}>
                <TaskList
                  item={item} />
              </AppContext.Provider>
            ))
          }
        </div>
      </div>
      <div className='fonpicture'></div>
    </div>
  )
}

export default App;