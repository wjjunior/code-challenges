import { useState } from "react";
import Item from "./Item";
import { useTodos } from "../context/useTodosContext";

export default function List() {
  const { state } = useTodos();
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  const filteredTodos = state.todos.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setFilter("all")}>Todas</button>
        <button onClick={() => setFilter("completed")}>Concluídas</button>
        <button onClick={() => setFilter("pending")}>Pendentes</button>
      </div>

      {filteredTodos.length === 0 && <p>Nenhuma tarefa encontrada.</p>}

      {filteredTodos.map((todo) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
