import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IPokeapi } from './interface/pokeapi.interface';
import { IPokemon } from './interface/pokemon.interface';
@Injectable()
export class PokeapiService {
  async getNameByPokeId(id: string) {
    const response = await axios.get<IPokeapi>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    const arrTypes: any[] = [];
    response.data.types.forEach((type) => arrTypes.push(type.type.name));
    const pokemon: IPokemon = {
      id: id,
      name: response.data.name,
      types: arrTypes,
    };
    return pokemon;
  }
}
