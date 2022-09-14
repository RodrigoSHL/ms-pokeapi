import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IPokeapi } from './interface/pokeapi.interface';
import { IPokemon } from './interface/pokemon.interface';
import { Cache } from 'cache-manager';
import { HttpModule } from '@nestjs/axios';

@Injectable()
export class PokeapiService {
  constructor(
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async getNameByPokeId(id: string): Promise<any> {
    try {
      const cachedData = await this.cacheManager.get(id.toString());
      if (cachedData) {
        console.log(`Getting data from cache!`);
        return `${cachedData}`;
      }
      // if not, call API and set the cache:
      const { data } = await this.httpService.axiosRef.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
      );
      await this.cacheManager.set(id.toString(), data);
      return await `${data.name}`;
    } catch (error) {
      console.log('error', error);
    }
  }
}
