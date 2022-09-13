import { CacheModule, Module } from '@nestjs/common';
import { PokeapiModule } from './pokeapi/pokeapi.module';

@Module({
  imports: [PokeapiModule, CacheModule.register({ isGlobal: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
