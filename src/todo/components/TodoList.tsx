import { useDeleteTodoMutation } from "@/queries/useDeleteTodoMutation";
import { QUERY_KEY, useGetTodoQuery } from "@/queries/useGetTodoQuery";
import { usePutTodoMutation } from "@/queries/usePutTodoMutation";
import { queryClient } from "@/queryClient";

export const TodoList = () => {
  const { data } = useGetTodoQuery();
  const { mutate: deleteTodo } = useDeleteTodoMutation({
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: QUERY_KEY });
    },
  });
  const { mutate: putTodo } = usePutTodoMutation({
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: QUERY_KEY });
    },
  });

  return (
    <ul>
      {data?.data?.map(({ checked, content, id }) => (
        <li key={id}>
          <input
            onChange={() => putTodo({ checked: !checked, content, id })}
            type="checkbox"
            checked={checked}
          />
          {content}
          <button onClick={() => deleteTodo(id)}>X</button>
        </li>
      ))}
    </ul>
  );
};
