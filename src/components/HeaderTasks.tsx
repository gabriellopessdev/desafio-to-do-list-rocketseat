interface HeaderTasksProps {
    createdTasks: number;
    completedTasks: number;
}

export function HeaderTasks({ createdTasks, completedTasks }: HeaderTasksProps) {
    return (
        <header className="flex justify-center">
            <div className="p-4 w-full">
                <div className="flex justify-between">
                    <span className="text-blue-400">Tarefas criadas: {createdTasks}</span>
                    <span className="text-purple-400">Concluídas: {completedTasks} de {createdTasks}</span>
                </div>
            </div>
        </header>
    );
}
