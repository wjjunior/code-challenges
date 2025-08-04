/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchBar } from "./components/SearchBar";
import { PokemonList } from "./components/PokemonList";
import { PokemonModal } from "./components/PokemonModal";
import { fetchPokemonDetails } from "./api/pokemon";
import { PokemonCard } from "./components/PokemonCard";

const queryClient = new QueryClient();

export default function App() {
  const [selected, setSelected] = useState<string | undefined>();
  const [searchResult, setSearchResult] = useState<any>(null);
  const [errorSearch, setErrorSearch] = useState(false);

  const handleSearch = async (name: string) => {
    if (!name) {
      setSearchResult(null);
      return;
    }
    try {
      setErrorSearch(false);
      const data = await fetchPokemonDetails(name);
      setSearchResult(data);
    } catch {
      setSearchResult(null);
      setErrorSearch(true);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "20px" }}>
        <h1>Pokédex</h1>
        <SearchBar onSearch={handleSearch} />

        {errorSearch && <p>Pokémon não encontrado</p>}

        {searchResult ? (
          <PokemonCard
            name={searchResult.name}
            onClick={() => setSelected(searchResult.name)}
          />
        ) : (
          <PokemonList onSelect={setSelected} />
        )}

        <PokemonModal name={selected} onClose={() => setSelected(undefined)} />
      </div>
    </QueryClientProvider>
  );
}
