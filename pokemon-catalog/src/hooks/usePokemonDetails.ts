import { useQuery } from "@tanstack/react-query";
import { fetchPokemonDetails } from "../api/pokemon";

export const usePokemonDetails = (name?: string) => {
  return useQuery({
    queryKey: ["pokemonDetails", name],
    queryFn: () => fetchPokemonDetails(name!),
    enabled: !!name,
  });
};
