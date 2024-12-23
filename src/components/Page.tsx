import Clipboard from '../assets/Clipboard.svg'
import Plus from '../assets/plus.svg'


export function Page() {
    return (
        <div className="bg-my-gray-600 w-full flex flex-col items-center grow font-inter">
            <div className="flex gap-2 h-14  w-content-w relative z-10 -top-7">
                <form action="" method="get" className='w-full'>
                    <input type="text" placeholder="Add a new task" className="h-14 rounded-lg bg-my-gray-500 w-full font-inter pl-4"/>
                </form>
                    <button className="flex gap-2 bg-blue-dark rounded-lg h-14 w-24 font-inter py-4 pl-4 pr-8 text-my-gray-100 font-bold">Create <img src={Plus} alt="" className='self-center'/></button>
            </div>  

            <div className="mt-16 w-content-w h-72">
                <div className="flex justify-between mb-6 font-bold">
                    <p className="flex gap-2 text-blue">Tasks created
                        <span className="text-white bg-my-gray-400 px-2 rounded-full">0</span>
                    </p>
                    <p className="flex gap-2 text-purple">Completed
                        <span className="text-white bg-my-gray-400 px-2 rounded-full">0</span>
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center border-t border-my-gray-400 rounded-lg text-my-gray-300 text-base">
                    <img src={Clipboard} alt="" className='w-14 h-14 mt-16 mb-4'/>
                    <div className='mb-16 text-center'>
                        <p className='font-bold'>You still don't have any registered tasks</p>
                        <p>Create tasks and organize your to-do items</p>
                    </div>
                </div>
            </div>
        </div>
    )
}