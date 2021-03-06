import * as Mongoose from 'mongoose';
import { Module } from '@nestjs/common';
import { RedisModule } from 'nestjs-redis';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Redis } from 'ioredis';
import AuthModule from '@components/auth/auth.module';
import UsersModule from '@components/users/users.module';
import FriendsModule from '@components/users/friends/friends.module';
import MessagesModule from '@components/messages/messages.module';
import PostsModule from '@components/posts/posts.module';
import AppController from './app.controller';
import AppService from './app.service';
import AppGateway from './app.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL || '', {
      connectionFactory: (connection: Mongoose.Connection) => {
        connection.on('error', (error: any): void => {
          console.error(error);
        });
        connection.on('reconnectFailed', () => {
          console.error('Reconnect to Mongodb has been failed');
        });
        connection.on('attemptReconnect', () => {
          console.log('attempt to reconnect Mongodb');
        });
        connection.on('reconnect', () => {
          console.log('reconnect to Mongodb');
        });
        connection.on('open', () => {
          console.log('Mongodb is connected successfully');
        });

        return connection;
      },
      // automatically try to reconnect when it loses connection
      autoReconnect: true,
      useCreateIndex: true,
      // reconnect every reconnectInterval milliseconds
      // for reconnectTries times
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 1000,
      // flag to allow users to fall back to the old
      // parser if they find a bug in the new parse
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    RedisModule.register({
      url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
      onClientReady: async (client: Redis): Promise<void> => {
        client.on('error', console.error);
        client.on('ready', () => {
          console.log(`redis is running on ${process.env.REDIS_PORT} port`);
        });
        client.on('restart', () => {
          console.log('attempt to restart the redis server');
        });
      },
      reconnectOnError: (error: Error): boolean => {
        console.error(error);

        return true;
      },
    }),
    AuthModule,
    UsersModule,
    FriendsModule,
    MessagesModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export default class AppModule {}
