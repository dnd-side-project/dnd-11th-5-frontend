"use client";

import { useEffect, useRef } from "react";

import { Status, usePersistTaskStore, useTaskStore } from "@/lib/store";

const ZustnadExample = () => {
  const persistTasks = usePersistTaskStore((state) => state.tasks);
  const persistAddTask = usePersistTaskStore((state) => state.addTask);
  const persistUpdateTask = usePersistTaskStore((state) => state.updateTask);
  const persistRemoveTask = usePersistTaskStore((state) => state.removeTask);
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);
  const updateTask = useTaskStore((state) => state.updateTask);
  const removeTask = useTaskStore((state) => state.removeTask);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usePersistTaskStore.persist.rehydrate();
  }, []);

  const handlePersistAdd = async () => {
    if (!inputRef.current) return;
    const title = inputRef.current.value;
    persistAddTask(title);
    inputRef.current.value = "";
  };

  const handleAdd = async () => {
    if (!inputRef.current) return;
    const title = inputRef.current.value;
    addTask(title);
    inputRef.current.value = "";
  };

  return (
    <div className="w-full">
      <span className={`mb-4 px-4 py-2 text-title-bold font-bold`}>
        TODO List
      </span>
      <div className={`space-y-2`}>
        <div className={`flex items-center space-x-2`}>
          <input
            type="text"
            ref={inputRef}
            className={`grow rounded-md border border-gray-300 p-2 text-black`}
            placeholder="Add a task"
          />
          <button
            className={`bg-blue-500 px-4 py-2 text-white`}
            onClick={handlePersistAdd}
          >
            Persist Add
          </button>
          <button
            className={`bg-blue-500 px-4 py-2 text-white`}
            onClick={handleAdd}
          >
            Local Add
          </button>
        </div>

        {persistTasks.map((task) => (
          <div key={task.id} className={`flex items-center space-x-2`}>
            <input
              type="checkbox"
              checked={task.status === "DONE"}
              onChange={() =>
                persistUpdateTask(
                  task.id,
                  task.status === Status.DONE ? Status.TODO : Status.DONE,
                )
              }
            />
            <p>{task.title + "- persist"}</p>
            <button
              className={`bg-red-500 px-4 py-2 text-white`}
              onClick={() => persistRemoveTask(task.id)}
            >
              Delete
            </button>
          </div>
        ))}
        {tasks.map((task) => (
          <div key={task.id} className={`flex items-center space-x-2`}>
            <input
              type="checkbox"
              checked={task.status === "DONE"}
              onChange={() =>
                updateTask(
                  task.id,
                  task.status === Status.DONE ? Status.TODO : Status.DONE,
                )
              }
            />
            <p>{task.title}</p>
            <button
              className={`bg-red-500 px-4 py-2 text-white`}
              onClick={() => removeTask(task.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZustnadExample;
