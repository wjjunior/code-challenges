import { type ReactNode, useReducer, useMemo } from "react";
import { type TodoState, type TodoAction, TodoContext } from "./TodoContext";

const initialState: TodoState = {
  todos: [],
};

function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case "ADD":
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    case "EDIT":
      return {
        todos: state.todos.map((t) =>
          t.id === action.payload.id ? { ...t, text: action.payload.text } : t
        ),
      };
    case "TOGGLE":
      return {
        todos: state.todos.map((t) =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };
    case "REMOVE":
      return {
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
}

export function TodoProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
