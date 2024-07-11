"use client";

import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { Card, IconButton, Text } from "@radix-ui/themes";
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
    <div>
      <Card className={`p-4`}>
        <Text className={`mb-4 text-lg font-bold`}>TODO List</Text>
        <div className={`space-y-2`}>
          <div className={`flex items-center space-x-2`}>
            <IconButton
              className={`bg-blue-500 text-white`}
              variant="solid"
              onClick={handleAdd}
            >
              <PlusIcon className={`h-5 w-5`} />
            </IconButton>
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
              <Text>{task.title}</Text>
              <IconButton
                className={`bg-red-500 text-white`}
                variant="solid"
                onClick={() => removeTask(task.id)}
              >
                <TrashIcon className={`h-5 w-5`} />
              </IconButton>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ZustnadExample;
