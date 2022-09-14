import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { PokeapiModule } from './pokeapi/pokeapi.module';
import * as redisStore from 'cache-manager-redis-store';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    PokeapiModule,
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
