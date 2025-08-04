import { useState } from "react";

interface Props {
  onSearch: (name: string) => void;
}

export function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState("");

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => onSearch(value.trim().toLowerCase())}>
        Buscar
      </button>
    </div>
  );
}
