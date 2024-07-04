import { Todo } from "@/todo/interface";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const putTodo = async (todo: Todo) => {
  const response = await fetch("/api/hello", {
    method: "PUT",
    body: JSON.stringify(todo),
  });
  return response.json();
};

export const usePutTodoMutation = (
  options?: UseMutationOptions<{ success: boolean }, unknown, Todo>
) =>
  useMutation({
    mutationFn: putTodo,
    ...options,
  });
