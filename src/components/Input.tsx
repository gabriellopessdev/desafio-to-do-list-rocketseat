interface InputProps {
    taskTitle: string;
    setTaskTitle: (text: string) => void;
    addTask: () => void
}

export function Input({ taskTitle, setTaskTitle, addTask }: InputProps) {
    return (
        <div className="flex justify-center">
            <div className="w-1/2 flex items-center">
                <input
                    className="bg-zinc-800 p-3 m-1 rounded flex-1 text-gray-200 w-full"
                    placeholder='Adicione uma nova tarefa'
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
                <button
                    className="bg-blue-600 text-gray-100 p-3 rounded"
                    onClick={addTask}
                >
                    Criar
                </button>
            </div>
        </div>

    )
}