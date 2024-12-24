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
        <div className="flex rounded-lg w-content-w bg-my-gray-400 gap-3 p-4">
            <label htmlFor="checkbox" className='flex gap-5'>
                <input onClick={handleTaskStatus} type="checkbox" name="" id="" className='absolute appearance-none w-7 h-7 border-2 rounded-full border-blue checked:border-purple-dark checked:bg-purple-dark mt-2'/>
                <span className='pl-1 pt-3'><Check size={18} color='white'/></span>
                <span className={`text-${data.isChecked? 'my-gray-300 line-through': 'my-gray-100'}`}>{data.content}</span>
            </label>
           <img src={Trash} onClick={handleRemove} alt=""className='h-4 w-4 mt-4'/>
        </div>
    )
}   
