import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 전체 모듈에서 사용 가능하도록 적용
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
