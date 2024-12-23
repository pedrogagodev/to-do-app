import Clipboard from '../../assets/Clipboard.svg'

export function Empty() {
    return (
        <div className="flex flex-col justify-center items-center border-t border-my-gray-400 rounded-lg text-my-gray-300 text-base">
            <img src={Clipboard} alt="" className='w-14 h-14 mt-16 mb-4'/>
            <div className='mb-16 text-center'>
                <p className='font-bold'>You still don't have any registered tasks</p>
                <p>Create tasks and organize your to-do items</p>
            </div>
        </div>
    )
}