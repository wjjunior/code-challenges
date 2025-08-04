import { createContext } from "react";
import type { Todo } from "../types/Todo";

export type TodoState = {
  todos: Todo[];
};

export type TodoAction =
  | { type: "ADD"; payload: string }
  | { type: "EDIT"; payload: { id: number; text: string } }
  | { type: "TOGGLE"; payload: number }
  | { type: "REMOVE"; payload: number };

interface TodoContextType {
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
}

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);
