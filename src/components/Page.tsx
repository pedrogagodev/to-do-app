import { Task } from './Elements/Task';
import Plus from '../assets/plus.svg';
import { useState } from 'react';
import { Empty } from './Elements/Empty';

export interface ITask {
  id: number;
  content: string;
  isChecked: boolean;
}

export function Page() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState('');

  const tasksChecked = tasks.filter((item) => item.isChecked === true);

  function handleAddTask() {
    if (!inputValue) return;

    const newTask: ITask = {
      id: new Date().getTime(),
      content: inputValue,
      isChecked: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue('');
  }

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleAddTask();
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);
  }

  function handleToggleStatus({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="flex w-screen grow flex-col items-center bg-my-gray-600 font-inter">
      <div className="relative top-7 z-10 flex h-14 w-content-w gap-2">
        <form onSubmit={handleOnSubmit} method="get" className="w-full">
          <input
            type="text"
            placeholder="Add a new task"
            className="h-14 w-full rounded-lg bg-my-gray-500 pl-4 font-inter text-white"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        </form>
        <button
          className="flex h-14 w-24 gap-2 rounded-lg bg-blue-dark py-4 pl-4 pr-10 font-inter font-bold text-my-gray-100"
          onClick={handleAddTask}
        >
          Create
        </button>
        <img
          src={Plus}
          alt=""
          className="absolute right-0 self-center pr-1.5"
        />
      </div>

      <div className="mt-16 min-h-72 w-content-w flex-1">
        <div className="mb-6 flex justify-between font-bold">
          <p className="flex gap-2 text-blue">
            Tasks created
            <span className="rounded-full bg-my-gray-400 px-2 text-white">
              {tasks.length}
            </span>
          </p>
          <p className="flex gap-2 text-purple">
            Completed
            <span className="rounded-full bg-my-gray-400 px-2 text-white">
              {tasksChecked.length != 0
                ? `${tasksChecked.length} of ${tasks.length}`
                : '0'}
            </span>
          </p>
        </div>
        <div>
          {tasks.length != 0 ? (
            tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleStatus}
                />
              );
            })
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </div>
  );
}
