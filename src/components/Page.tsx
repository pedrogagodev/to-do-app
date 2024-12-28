import { Task } from './Elements/Task'
import Plus from '../assets/plus.svg'
import { useState } from 'react'

export interface ITask {
    id: number,
    content: string,
    isChecked: boolean
  }
  

export function Page() {
    const [tasks, setTasks] = useState<ITask[]>([])
    const [inputValue, setInputValue] = useState('')
    
    function handleAddTask() {
        if (!inputValue) return
    
        const newTask: ITask = {
          id: new Date().getTime(),
          content: inputValue,
          isChecked: false,
        }
    
        setTasks((state) => [...state, newTask])
        setInputValue('')
      }

    function handleRemoveTask(id: number) {
        const filteredTasks = tasks.filter((task) => task.id !== id)

        setTasks(filteredTasks)
    }

    function handleToggleStatus({ id, value }: { id: number; value: boolean }) {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return {...task, isChecked: value}
            }

            return {...task}
        })

        setTasks(updatedTasks)
    }


    return (
        <div className="bg-my-gray-600 w-screen flex flex-col items-center grow font-inter">
            <div className="flex gap-2 h-14  w-content-w relative z-10 top-7">
                <form action="" method="get" className='w-full'>
                    <input type="text" 
                    placeholder="Add a new task" 
                    className="h-14 rounded-lg bg-my-gray-500 w-full font-inter pl-4 text-white"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    />
                </form>
                    <button className="flex gap-2 bg-blue-dark rounded-lg h-14 w-24 font-inter py-4 pl-4 pr-10 text-my-gray-100 font-bold"
                    onClick={handleAddTask}
                    >Create
                    </button>
                    <img src={Plus} alt="" className='self-center absolute right-0 pr-1.5'/>
            </div>  

            <div className="mt-16 min-h-72 flex-1">
                <div className="flex justify-between mb-6 font-bold">
                    <p className="flex gap-2 text-blue">Tasks created
                        <span className="text-white bg-my-gray-400 px-2 rounded-full">{tasks.length}</span>
                    </p>
                    <p className="flex gap-2 text-purple">Completed
                        <span className="text-white bg-my-gray-400 px-2 rounded-full">completed of {tasks.length}</span>
                    </p>
                </div>
                <div>
                    {tasks.map((task) => {
                       return <Task key={task.id} data={task} removeTask={handleRemoveTask} toggleTaskStatus={handleToggleStatus}/>
                    })}
                </div>
            </div>
        </div>
    )
}

