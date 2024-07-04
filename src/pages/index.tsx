import { TodoDashboard } from "@/todo/components/TodoDashboard";
import { TodoForm } from "@/todo/components/TodoForm";
import { TodoList } from "@/todo/components/TodoList";

export default function Page() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <TodoDashboard />
      <TodoForm />
      <TodoList />
    </main>
  );
}
