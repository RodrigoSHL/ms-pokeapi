import { PartialType } from '@nestjs/mapped-types';
import { CreatePokeapiDto } from './create-pokeapi.dto';

export class UpdatePokeapiDto extends PartialType(CreatePokeapiDto) {}
