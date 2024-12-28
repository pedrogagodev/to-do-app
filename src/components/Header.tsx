import Rocket from '../assets/rocket.svg';

export function Header() {
  return (
    <div className="flex h-52 w-screen items-center justify-center bg-my-gray-700">
      <img src={Rocket} alt="" className="mt-2 h-9 w-5" />
      <div className="ml-3 font-inter text-4xl font-black">
        <span className="text-blue">to</span>
        <span className="text-purple">do</span>
      </div>
    </div>
  );
}
