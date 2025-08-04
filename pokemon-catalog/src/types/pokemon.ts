export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  results: PokemonListItem[];
  next: string | null;
}

export interface PokemonDetails {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other?: {
      ["official-artwork"]?: {
        front_default: string;
      };
    };
  };
  types: { slot: number; type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  height: number;
  weight: number;
}
