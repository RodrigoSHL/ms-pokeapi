export interface IPokemon {
  id: string;
  name: string;
  types: IType[];
}

export interface IType {
  name: string;
}
