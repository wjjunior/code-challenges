import { usePokemonList } from "../hooks/usePokemonList";
import { PokemonCard } from "./PokemonCard";
import type { PokemonListItem } from "../types/pokemon";

interface Props {
  onSelect: (name: string) => void;
}

export function PokemonList({ onSelect }: Props) {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    usePokemonList();

  if (isLoading) return <p>Carregando Pokémons...</p>;
  if (isError) return <p>Erro ao carregar Pokémons.</p>;

  const pokemons: PokemonListItem[] =
    data?.pages.flatMap((page) => page.results) || [];

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {pokemons.map((p: PokemonListItem) => (
          <PokemonCard
            key={p.name}
            name={p.name}
            onClick={() => onSelect(p.name)}
          />
        ))}
      </div>
      {hasNextPage && (
        <button style={{ marginTop: "10px" }} onClick={() => fetchNextPage()}>
          Carregar mais
        </button>
      )}
    </div>
  );
}
