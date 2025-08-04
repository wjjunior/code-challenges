import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../api/pokemon";
import type { PokemonListResponse } from "../types/pokemon";

export const usePokemonList = () => {
  return useInfiniteQuery({
    queryKey: ["pokemonList"],
    initialPageParam: 0,
    queryFn: ({ pageParam }: { pageParam: number }) =>
      fetchPokemonList(pageParam, 20),
    getNextPageParam: (lastPage: PokemonListResponse) => {
      const nextUrl = lastPage.next;
      if (!nextUrl) return undefined;

      const url = new URL(nextUrl);
      return Number(url.searchParams.get("offset"));
    },
  });
};
