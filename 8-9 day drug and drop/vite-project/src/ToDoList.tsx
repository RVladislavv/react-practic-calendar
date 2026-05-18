import { type SubmitEvent, useState } from "react";
import {
    type DragEndEvent,
    DragDropProvider,
    useDraggable,
    useDroppable,
} from "@dnd-kit/react";

type Status = "to-do" | "in-progress" | "done";

interface ITodo {
    id: number;
    text: string;
    status: Status;
}

const COLUMNS: { status: Status; title: string }[] = [
    { status: "to-do", title: "TODO List" },
    { status: "in-progress", title: "In Progress" },
    { status: "done", title: "Done" },
];

const isStatus = (id: unknown): id is Status =>
    id === "to-do" || id === "in-progress" || id === "done";

function TaskItem({
    task,
    onDelete,
}: {
    task: ITodo;
    onDelete: (id: number) => void;
}) {
    const { ref, isDragging } = useDraggable({ id: String(task.id) });

    return (
        <li
            ref={ref}
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "8px",
                padding: "8px",
                marginBottom: "6px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                background: "#fff",
                cursor: isDragging ? "grabbing" : "grab",
                opacity: isDragging ? 0.5 : 1,
            }}
        >
            {task.text}
            <button
                type="button"
                onClick={() => onDelete(task.id)}
                onPointerDown={(e) => e.stopPropagation()}
                style={{ color: "red", cursor: "pointer" }}
            >
                X
            </button>
        </li>
    );
}

function Column({
    status,
    title,
    tasks,
    onDelete,
}: {
    status: Status;
    title: string;
    tasks: ITodo[];
    onDelete: (id: number) => void;
}) {
    const { ref, isDropTarget } = useDroppable({ id: status });
    const columnTasks = tasks.filter((task) => task.status === status);

    return (
        <div
            ref={ref}
            style={{
                border: isDropTarget ? "2px solid #4a90d9" : "1px solid red",
                width: "300px",
                minHeight: "600px",
                padding: "12px",
                background: isDropTarget ? "#f0f7ff" : "transparent",
                transition: "background 0.15s, border 0.15s",
            }}
        >
            <h3 style={{ marginTop: 0 }}>{title}</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {columnTasks.map((task) => (
                    <TaskItem key={task.id} task={task} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    );
}

const ToDoList = () => {
    const [newTodo, setNewTodo] = useState("");
    const [tasks, setTasks] = useState<ITodo[]>([
        { id: 1, text: "buy milk", status: "to-do" },
        { id: 2, text: "wash bike", status: "in-progress" },
        { id: 3, text: "do the budget", status: "done" },
        { id: 4, text: "call jane", status: "to-do" },
    ]);

    const handleCreateTasks = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!newTodo.trim()) return;
        setTasks((prev) => [
            ...prev,
            { id: Date.now(), text: newTodo.trim(), status: "to-do" },
        ]);
        setNewTodo("");
    };

    const handleDeleteTasks = (id: number) => {
        setTasks((prev) => prev.filter((item) => item.id !== id));
    };

    const handleDragEnd = (event: DragEndEvent) => {
        if (event.canceled) return;

        const { source, target } = event.operation;
        if (!source?.id || !target?.id || !isStatus(target.id)) return;

        const taskId = Number(source.id);
        const newStatus = target.id;

        setTasks((prev) =>
            prev.map((task) =>
                task.id === taskId ? { ...task, status: newStatus } : task,
            ),
        );
    };

    return (
        <div>
            <form onSubmit={handleCreateTasks}>
                <input
                    type="text"
                    placeholder="Add a new todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit">Add task</button>
            </form>

            <DragDropProvider onDragEnd={handleDragEnd}>
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-around",
                        marginTop: "20px",
                    }}
                >
                    {COLUMNS.map(({ status, title }) => (
                        <Column
                            key={status}
                            status={status}
                            title={title}
                            tasks={tasks}
                            onDelete={handleDeleteTasks}
                        />
                    ))}
                </div>
            </DragDropProvider>
        </div>
    );
};

export default ToDoList;
