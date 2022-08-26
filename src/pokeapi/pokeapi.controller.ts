import { Controller, Get, Param } from '@nestjs/common';
import { PokeapiService } from './pokeapi.service';

@Controller('pokeapi')
export class PokeapiController {
  constructor(private readonly pokeapiService: PokeapiService) {}

  @Get(':id')
  getNameByPokeId(@Param('id') id: string) {
    return this.pokeapiService.getNameByPokeId(id);
  }
}
