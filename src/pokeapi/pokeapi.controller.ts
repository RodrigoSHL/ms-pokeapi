import {
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { PokeapiService } from './pokeapi.service';

@Controller('pokeapi')
export class PokeapiController {
  constructor(private readonly pokeapiService: PokeapiService) {}

  @UseInterceptors(CacheInterceptor) // Automatically cache the response for this endpoint
  @CacheTTL(30) // override TTL to 30 seconds
  @CacheKey('custom-key')
  @Get(':id')
  getNameByPokeId(@Param('id') id: string) {
    return this.pokeapiService.getNameByPokeId(id);
  }
}
