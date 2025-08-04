import { useState } from "react";
import { useTodos } from "../context/useTodosContext";

export default function Form() {
  const { dispatch } = useTodos();
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: "ADD", payload: text });
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite uma tarefa..."
        style={{ padding: "8px", width: "70%" }}
      />
      <button type="submit" style={{ marginLeft: "8px" }}>
        Adicionar
      </button>
    </form>
  );
}
