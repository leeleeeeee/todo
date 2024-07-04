import { useMutation, UseMutationOptions } from "@tanstack/react-query";

const deleteTodo = async (id: number) => {
  const response = await fetch("/api/hello", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  return response.json();
};

export const useDeleteTodoMutation = (
  options?: UseMutationOptions<{ success: boolean }, unknown, number>
) => useMutation({ mutationFn: deleteTodo, ...options });
