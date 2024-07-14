"use client";

import { useEffect, useRef } from "react";

import { Status, useTaskStore } from "@/lib/store";

const ZustnadExample = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const addTask = useTaskStore((state) => state.addTask);
  const updateTask = useTaskStore((state) => state.updateTask);
  const removeTask = useTaskStore((state) => state.removeTask);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    useTaskStore.persist.rehydrate();
  }, []);

  const handleAdd = async () => {
    if (!inputRef.current) return;

    const title = inputRef.current.value;

    addTask(title);

    inputRef.current.value = "";
  };

  return (
    <div className="w-full">
      <span className={`mb-4 px-4 py-2 text-lg font-bold`}>TODO List</span>
      <div className={`space-y-2`}>
        <div className={`flex items-center space-x-2`}>
          <button
            className={`bg-blue-500 px-4 py-2 text-white`}
            onClick={handleAdd}
          >
            Add
          </button>
          <input
            type="text"
            ref={inputRef}
            className={`grow rounded-md border border-gray-300 p-2`}
            placeholder="Add a task"
          />
        </div>

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
