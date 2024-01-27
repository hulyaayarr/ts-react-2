import { TodoListItemProps } from "./TodoList";

export function TodoListItem(todo: TodoListItemProps) {
  return (
    <li className="todo-list-item">
      <div className="title">{todo.subject}</div>
      <div className="subject">{todo.description}</div>
      <div className="status">Completed: {todo.isCompleted ? "Yes" : "No"}</div>
    </li>
  );
}
