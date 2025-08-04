import type { PokemonListResponse, PokemonDetails } from "../types/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonList = async (
  offset = 0,
  limit = 20
): Promise<PokemonListResponse> => {
  const res = await fetch(
    `${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`
  );
  if (!res.ok) throw new Error("Erro ao carregar lista de Pokémons");
  return res.json();
};

export const fetchPokemonDetails = async (
  name: string
): Promise<PokemonDetails> => {
  const res = await fetch(`${BASE_URL}/pokemon/${name}`);
  if (!res.ok) throw new Error("Pokémon não encontrado");
  return res.json();
};
