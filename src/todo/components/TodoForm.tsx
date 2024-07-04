import { FormEvent, useRef } from "react";
import { Todo } from "../interface";

interface TodoFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>, newTodo: Todo) => void;
}

export const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!inputRef.current) return;
    onSubmit(e, {
      checked: false,
      content: inputRef.current.value || "",
      id: Date.now(),
    });

    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
      <button type="submit">추가</button>
    </form>
  );
};
