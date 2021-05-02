import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import Json2PlainObject from '@pipes/json2plainobj.pipe';
import MessagesService from './messages.service';
import MessageHistoryFilterDto from './dto/message-history-filter.dto';
import CreateMessageDto from './dto/create-message.dto';
import { MessageEntity } from './schemas/messages.schema';

@WebSocketGateway()
export default class MessagesGateway {
  @WebSocketServer()
  private readonly server: Server | undefined;

  constructor(readonly messagesService: MessagesService) {}

  @SubscribeMessage('message')
  async message(@MessageBody(Json2PlainObject) message: CreateMessageDto): Promise<void> {
    await this.messagesService.createOne(message);
  }

  @SubscribeMessage('messages_history')
  async history(@MessageBody(Json2PlainObject) filters: MessageHistoryFilterDto): Promise<void> {
    if (!this.server) {
      return;
    }
    const messages: MessageEntity[] = await this.messagesService.getHistoryWithFilters(filters);
    this.server.emit('messages_history', JSON.stringify(messages));
  }
}
