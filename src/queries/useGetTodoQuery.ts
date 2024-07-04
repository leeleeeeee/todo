import { Todo } from "@/todo/interface";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export const QUERY_KEY = ["todos"];

const getTodo = async () => {
  const response = await fetch("/api/hello");
  return response.json();
};

export const useGetTodoQuery = (
  options?: Omit<
    UseQueryOptions<{ success: boolean; data: Todo[] }>,
    "queryKey"
  >
) =>
  useQuery({
    queryKey: QUERY_KEY,
    queryFn: getTodo,
    staleTime: 1000 * 60 * 5, // 5분
    ...options,
  });
