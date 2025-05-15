
import './App.css'

function App() {
  
  return (
    <>
     <div className='container'>
      <h1>To-List Project</h1>
     </div>
     <div className='container1'>
      <input type="text" placeholder='Add a new task' />
      <button>Add</button><button>Delete</button>
     </div>
       const task= document.getElementByTagName ('input')
      const value= task.value
      const taskList= document.getElementByClassName ('task-list')
      taskList.innerHTML = `<li>${value}</li>`
    </>
  )
}

export default App
