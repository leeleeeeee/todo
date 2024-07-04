import { Todo } from "@/todo/interface";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const postTodo = async (todo: Todo) => {
  const response = await fetch("/api/hello", {
    method: "POST",
    body: JSON.stringify(todo),
  });
  return response.json();
};

export const usePostTodoMutation = (
  options?: UseMutationOptions<{ success: boolean }, unknown, Todo>
) =>
  useMutation({
    mutationFn: postTodo,
    ...options,
  });
