function filterForArray({ array, condition1, condition2 }) {

  return array.filter(item => {
    if (condition1 === 'all') {
      if (condition2.length > 0) {
        return item.nameOfTask.toLowerCase().includes(condition2.toLowerCase())
      } else {
        return item
      }
    } else if (condition1 === 'closed') {
      if (condition2.length > 0) {
        return !item.isTaskActive && item.nameOfTask.toLowerCase().includes(condition2.toLowerCase())
      } else {
        return !item.isTaskActive
      }
    } else if (condition1 === 'allActive') {
      if (condition2.length > 0) {
        return item.isTaskActive && item.nameOfTask.toLowerCase().includes(condition2.toLowerCase())
      } else {
        return item.isTaskActive
      }
    } else if (condition2.length > 0) {
      return item.nameOfTask.toLowerCase().includes(condition2.toLowerCase())
    } else {
      return item
    }
  })

}


export { filterForArray }