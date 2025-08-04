interface Props {
  name: string;
  onClick: () => void;
}

export function PokemonCard({ name, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        cursor: "pointer",
        width: "150px",
        textAlign: "center",
      }}
    >
      <p style={{ textTransform: "capitalize" }}>{name}</p>
    </div>
  );
}
