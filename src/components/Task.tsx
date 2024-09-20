import { Trash, Check } from "phosphor-react";
import { HeaderTasks } from "./HeaderTasks";

interface Task {
    id: string;
    title: string;
    taskDone: boolean;
}

interface TasksProps {
    tasks: Task[];
    onDeleteTask: (id: string) => void;
    onToggleTask: (id: string) => void
}

export function Tasks({ tasks, onDeleteTask, onToggleTask }: TasksProps) {

    function handleDeleteTask(id: string) {
        onDeleteTask(id);
    }

    function handleToggleTask(id: string) {
        onToggleTask(id);
    }

    return (
        <section>
            <HeaderTasks
                createdTasks={tasks.length}
                completedTasks={tasks.filter((task) => task.taskDone).length}
            />

            {tasks.length === 0 ? (
                <div className="text-gray-500">
                    <p className="flex justify-center mt-4"> <strong>Você ainda não tem tarefas cadastradas</strong></p>
                    <p className="flex justify-center">Crie tarefas e organize seus itens a fazer</p>
                </div>
            ) : (
                <ul className="list-disc pl-5">
                    {tasks.map(task => (
                        <li
                            key={task.id}
                            className="flex 2 bg-zinc-800 rounded p-3 mb-4"
                        >
                            <label>
                                <input type="checkbox"
                                    checked={task.taskDone}
                                    onChange={() => handleToggleTask(task.id)}
                                    className="sr-only"
                                />
                                <div className={`w-4 h-4 mt-3 rounded-full border-2 ${task.taskDone ? 'bg-purple-400 border-purple-400' : 'bg-transparent border-blue-400'}`}>
                                    {task.taskDone && (<Check size={12} color="white" />)}
                                </div>
                            </label>
                            <span className={`flex-1 text-gray-200 m-2 ${task.taskDone ? 'line-through text-gray-500' : ''}`}>
                                {task.title}
                            </span>
                            <button
                                onClick={() => handleDeleteTask(task.id)}
                                className="text-gray-300 hover:text-red-700 ml-2"
                            >
                                <Trash size={24} />
                            </button>
                        </li>
                    ))}
                </ul>

            )}
        </section>
    );
}