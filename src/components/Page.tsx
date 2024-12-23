import Empty from './Elements/Empty';
import Plus from '../assets/plus.svg';

export function Page() {
  return (
    <div className="flex w-full grow flex-col items-center bg-my-gray-600 font-inter">
      <div className="relative -top-7 z-10 flex h-14 w-content-w gap-2">
        <form action="" method="get" className="w-full">
          <input
            type="text"
            placeholder="Add a new task"
            className="h-14 w-full rounded-lg bg-my-gray-500 pl-4 font-inter"
          />
        </form>
        <button className="flex h-14 w-24 gap-2 rounded-lg bg-blue-dark py-4 pl-4 pr-8 font-inter font-bold text-my-gray-100">
          Create <img src={Plus} alt="" className="self-center" />
        </button>
      </div>

      <div className="mt-16 h-72 w-content-w">
        <div className="mb-6 flex justify-between font-bold">
          <p className="flex gap-2 text-blue">
            Tasks created
            <span className="rounded-full bg-my-gray-400 px-2 text-white">
              0
            </span>
          </p>
          <p className="flex gap-2 text-purple">
            Completed
            <span className="rounded-full bg-my-gray-400 px-2 text-white">
              0
            </span>
          </p>
        </div>
        <Empty />
      </div>
    </div>
  );
}
