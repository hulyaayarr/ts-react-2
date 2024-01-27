import "./App.css";
import { TodoList, TodoListItemProps } from "./TodoList";
import { TodoListItem } from "./TodoListItem";

const todos: TodoListItem[] = [
  {
    subject: "Record Video",
    description: "Record video for the subject react and typescript",
    isCompleted: false,
  },
  {
    subject: "Organize Syllabus",
    description: "Front-end syllabus should be updated",
    isCompleted: false,
  },
  {
    subject: "Prepare Homework",
    description: "Prepare well-defined homework subject for react",
    isCompleted: false,
  },
  {
    subject: "Design Website",
    description: "Prepare a well-designed website",
    isCompleted: false,
  },
];

function App() {
  return (
    <>
      <h1>React - Render Props</h1>
      <TodoList
        title="Todo List"
        todos={todos}
        renderListItem={(todo: TodoListItemProps) => (
          <TodoListItem
            subject={todo.subject}
            description={todo.description}
            isCompleted={todo.isCompleted}
          />
        )}
      />
    </>
  );
}

export default App;
