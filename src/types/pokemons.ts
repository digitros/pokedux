export interface IPokemonDetails {
  id: number;
  name: string;
  img: string;
  url: string;
  abilities: string[];
  sprites: IPokemonSprites;
  isFavorite: boolean;
}

export interface IPokemonSprites {
  front_default: string;
}
