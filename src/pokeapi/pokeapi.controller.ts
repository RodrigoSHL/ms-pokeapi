import { CacheKey, CacheTTL, Controller, Get, Param } from '@nestjs/common';
import { PokeapiService } from './pokeapi.service';

@Controller('pokeapi')
export class PokeapiController {
  constructor(private readonly pokeapiService: PokeapiService) {}

  // @UseInterceptors(CacheInterceptor) // Automatically cache the response for this endpoint // use this decorator when you want a caching controller or specific method
  @CacheTTL(30) // override TTL to 30 seconds
  @CacheKey('poke-key')
  @Get(':id')
  getNameByPokeId(@Param('id') id: string) {
    return this.pokeapiService.getNameByPokeId(id);
  }
}
