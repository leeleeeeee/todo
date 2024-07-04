import { FormEvent, useRef } from "react";
import { usePostTodoMutation } from "@/queries/usePostTodoMutation";
import { queryClient } from "@/queryClient";
import { QUERY_KEY } from "@/queries/useGetTodoQuery";

export const TodoForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { mutate } = usePostTodoMutation({
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: QUERY_KEY });
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current) return;
    mutate({
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
