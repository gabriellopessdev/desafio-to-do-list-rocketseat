import { useState } from 'react';
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Tasks } from './components/Task'
import { v4 as uuidv4 } from 'uuid';



import './index.css'
export function App() {
    const [tasks, setTasks] = useState<{ id: string; title: string; taskDone: boolean }[]>([]);
    const [taskTitle, setTaskTitle] = useState<string>("");

    // Função para adicionar uma nova tarefa
    const addTask = () => {
        if (taskTitle.trim() === "") return;

        const newTask = {
            id: uuidv4(),
            title: taskTitle,
            taskDone: false,
        };

        setTasks([...tasks, newTask]);
        setTaskTitle("");
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleTask = (id: string) => {
        setTasks(tasks.map((task) =>
            task.id === id ? { ...task, taskDone: !task.taskDone }
                : task
        ));
    }

    return (
        <main className="p-4 bg-black h-52 w-full">
            <Header />
            <div className="my-10">
                <Input
                    taskTitle={taskTitle}
                    setTaskTitle={setTaskTitle}
                    addTask={addTask}
                />
            </div>
            <div className='flex justify-center'>
                <div className='w-1/2 border-t border-gray-500 rounded-t-lg'>
                    <Tasks tasks={tasks} onDeleteTask={deleteTask} onToggleTask={toggleTask} />
                </div>
            </div>

        </main>
    );
}