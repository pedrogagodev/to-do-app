import Trash from '../../assets/Trash.svg'
import { Check } from '@phosphor-icons/react'
import { ITask } from '../Page'

interface Props {
    data: ITask
    removeTask: (id: number) => void
    toggleTaskStatus: ({id, value}: {id: number; value: boolean}) => void
}

export function Task({ data, removeTask, toggleTaskStatus }: Props) {

    function handleTaskStatus() {
        toggleTaskStatus({id: data.id, value: !data.isChecked})
    }

    function handleRemove() {
        removeTask(data.id)
    }

    return (
        <div className="flex rounded-lg w-content-w bg-my-gray-400 gap-3 p-4 mb-3 justify-between break-all">
            <label htmlFor="checkbox" className='flex gap-5 '>
                <input onClick={handleTaskStatus} type="checkbox" name="" id="" className='absolute appearance-none w-7 h-7 border-2 rounded-full border-blue checked:border-purple-dark checked:bg-purple-dark'/>
                <span className={`text-${data.isChecked? 'my-gray-300 line-through': 'my-gray-100'} ml-11`}>{data.content}</span>
            </label>
           <img src={Trash} onClick={handleRemove} alt=""className='h-6 w-5 mt-1 hover:cursor-pointer'/>
        </div>
    )
}   
