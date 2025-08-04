import { usePokemonDetails } from "../hooks/usePokemonDetails";

interface Props {
  name?: string;
  onClose: () => void;
}

export function PokemonModal({ name, onClose }: Props) {
  const { data, isLoading, isError } = usePokemonDetails(name);

  if (!name) return null;
  if (isLoading) return <p>Carregando detalhes...</p>;
  if (isError) return <p>Erro ao carregar detalhes.</p>;

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "30%",
        background: "#fff",
        padding: "20px",
        border: "1px solid #000",
      }}
    >
      <h2 style={{ textTransform: "capitalize" }}>{data?.name}</h2>
      <img
        src={
          data?.sprites.other?.["official-artwork"]?.front_default ||
          data?.sprites.front_default
        }
        alt={data?.name}
        width={150}
      />
      <p>
        <strong>Tipos:</strong> {data?.types.map((t) => t.type.name).join(", ")}
      </p>
      <p>
        <strong>Habilidades:</strong>{" "}
        {data?.abilities.map((a) => a.ability.name).join(", ")}
      </p>
      <p>
        <strong>Peso:</strong> {data?.weight}
      </p>
      <p>
        <strong>Altura:</strong> {data?.height}
      </p>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
}
