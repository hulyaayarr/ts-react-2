interface ToDoListProps {
  title: string;
  todos: TodoListItemProps[];
  renderListItem: (todo: TodoListItemProps) => JSX.Element;
}

export interface TodoListItemProps {
  subject: string;
  description: string;
  isCompleted: boolean;
}

export function TodoList({ title, todos, renderListItem }: ToDoListProps) {
  return (
    <div className="todo-list">
      <div>{title}</div>
      <ul>{todos.map(renderListItem)}</ul>
    </div>
  );
}
