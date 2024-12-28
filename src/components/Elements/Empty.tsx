import Clipboard from '../../assets/Clipboard.svg';

export function Empty() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-t border-my-gray-400 text-base text-my-gray-300">
      <img src={Clipboard} alt="" className="mb-4 mt-16 h-14 w-14" />
      <div className="mb-16 text-center">
        <p className="font-bold">You still don't have any registered tasks</p>
        <p>Create tasks and organize your to-do items</p>
      </div>
    </div>
  );
}
