import { useList } from "@/hooks/useList";
import { TodoForm } from "@/todo/components/TodoForm";
import { TodoList } from "@/todo/components/TodoList";
import { Todo } from "@/todo/interface";
import { FormEvent, useState } from "react";

export default function Page() {
  const { append, list: todoList, remove, replace } = useList<Todo>();

  const handleAddTodo = (e: FormEvent<HTMLFormElement>, newTodo: Todo) => {
    e.preventDefault();
    if (newTodo.content.trim() === "") return;

    append(newTodo);
  };

  const handleToggleTodo = (id: number) => {
    const targetIndex = todoList?.findIndex((todo) => todo.id === id);
    if (targetIndex === undefined) return;

    const target = todoList?.[targetIndex];
    if (!target) return;

    const newTarget = {
      ...target,
      checked: !target?.checked,
    };

    if (!newTarget) return;

    replace(targetIndex, newTarget);
  };

  const handleDeleteTodo = (id: number) => {
    const targetIndex = todoList?.findIndex((todo) => todo.id === id);
    if (!targetIndex) return;

    remove(targetIndex);
  };

  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <TodoForm onSubmit={handleAddTodo} />
      <TodoList
        onDeleteTodo={handleDeleteTodo}
        list={todoList}
        onToggleTodo={handleToggleTodo}
      />
    </main>
  );
}
