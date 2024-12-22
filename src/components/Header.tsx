import Rocket from '../assets/rocket.svg'

export function Header() {
    return (
        <div className="flex justify-center items-center bg-my-gray-700 h-52 w-screen">
            <img src={Rocket} alt="" className='w-5 h-9 mt-2'/>
            <div className='ml-3 text-4xl font-inter font-bold '>
                <span className='text-blue'>to</span>
                <span className='text-purple'>do</span>
            </div>
        </div>
    )
}