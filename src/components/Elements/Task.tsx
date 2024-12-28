import Trash from '../../assets/Trash.svg';
import { ITask } from '../Page';

interface Props {
  data: ITask;
  removeTask: (id: number) => void;
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void;
}

export function Task({ data, removeTask, toggleTaskStatus }: Props) {
  function handleTaskStatus() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked });
  }

  function handleRemove() {
    removeTask(data.id);
  }

  return (
    <div className="mb-3 flex w-content-w justify-between gap-3 break-all rounded-lg bg-my-gray-400 p-4">
      <label htmlFor="checkbox" className="flex gap-5">
        <input
          onClick={handleTaskStatus}
          type="checkbox"
          name=""
          id=""
          className="absolute h-7 w-7 appearance-none rounded-full border-2 border-blue checked:border-purple-dark checked:bg-purple-dark"
        />
        <span
          className={`text-${data.isChecked ? 'my-gray-300 line-through' : 'my-gray-100'} ml-11`}
        >
          {data.content}
        </span>
      </label>
      <img
        src={Trash}
        onClick={handleRemove}
        alt=""
        className="mt-1 h-6 w-5 hover:cursor-pointer"
      />
    </div>
  );
}
