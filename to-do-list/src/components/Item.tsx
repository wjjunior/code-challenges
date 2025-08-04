import { useState } from "react";
import { useTodos } from "../context/useTodosContext";
import type { Todo } from "../types/Todo";

interface Props {
  todo: Todo;
}

export default function Item({ todo }: Props) {
  const { dispatch } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  function handleEdit() {
    if (!newText.trim()) return;
    dispatch({ type: "EDIT", payload: { id: todo.id, text: newText } });
    setIsEditing(false);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "5px",
        borderBottom: "1px solid #ddd",
      }}
    >
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
          autoFocus
        />
      ) : (
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
          onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
        >
          {todo.text}
        </span>
      )}

      <div>
        <button onClick={() => setIsEditing(true)}>Editar</button>
        <button
          onClick={() => dispatch({ type: "REMOVE", payload: todo.id })}
          style={{ marginLeft: "5px", color: "red" }}
        >
          Remover
        </button>
      </div>
    </div>
  );
}
