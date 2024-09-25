import { useGetTodoQuery } from "@/queries/useGetTodoQuery";

export const TodoDashboard = () => {
  const { data } = useGetTodoQuery();

  const allTodoCount = data?.data.length;

  const checkedTodoCount = data?.data.filter((todo) => todo.checked).length;

  const uncheckedTodoCount = (allTodoCount || 0) - (checkedTodoCount || 0);

  return (
    <div>
      <div>test</div>
      <div>총 TODO 갯수: {allTodoCount}</div>
      <div>현재 남은 TODO 갯수: {checkedTodoCount}</div>
      <div>완료한 TODO 갯수: {uncheckedTodoCount}</div>
    </div>
  );
};
