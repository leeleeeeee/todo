import { Todo } from "../interface";

interface TodoListProps {
  list?: Todo[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

export const TodoList = ({
  list,
  onToggleTodo,
  onDeleteTodo,
}: TodoListProps) => {
  return (
    <ul>
      {list?.map(({ checked, content, id }) => (
        <li key={id}>
          <input
            onChange={() => onToggleTodo(id)}
            type="checkbox"
            checked={checked}
          />
          {content}
          <button onClick={() => onDeleteTodo(id)}>X</button>
        </li>
      ))}
    </ul>
  );
};
