import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from './schemas/messages.schema';
import MessagesGateway from './messages.gateway';
import MessagesService from './messages.service';
import MessagesRepository from './messages.repository';
import messagesConstants from './messages.constants';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: messagesConstants.models.messages,
      schema: MessageSchema,
    }]),
  ],
  providers: [MessagesService, MessagesRepository, MessagesGateway],
})
export default class MessagesModule {}
