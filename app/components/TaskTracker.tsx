// components/TaskTracker.tsx
"use client";

import { useState } from 'react';

// Define the type for a task object
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function TaskTracker() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Complete Onchain Fundamentals Course", completed: false },
    { id: 2, text: "Build a Mini App with MiniKit", completed: true },
    { id: 3, text: "Design a Personal Logo", completed: false },
  ]);
  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = () => {
    if (newTaskText.trim() === "") return;
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    const newTask = { id: newId, text: newTaskText, completed: false };
    setTasks([...tasks, newTask]);
    setNewTaskText("");
  };

  const handleToggleComplete = (taskId: number) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Skill Development Tracker</h1>
      
      {/* Input to add new tasks */}
      <div className="flex mb-6 space-x-2">
        <input
          type="text"
          placeholder="Add a new goal or task..."
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAddTask();
          }}
          className="flex-1 px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Add
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <div 
            key={task.id}
            onClick={() => handleToggleComplete(task.id)}
            className={`p-4 rounded-lg cursor-pointer transition-colors ${task.completed ? 'bg-green-800' : 'bg-gray-800 hover:bg-gray-700'}`}
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => {}} // onChange is required but we handle click on the div
                className="form-checkbox h-5 w-5 text-green-500 bg-gray-700 border-gray-600 rounded"
              />
              <span className={`text-lg ${task.completed ? 'line-through text-gray-400' : 'text-white'}`}>
                {task.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}