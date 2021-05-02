import { Injectable } from '@nestjs/common';
import MessagesRepository from './messages.repository';
import MessageHistoryFilterDto from './dto/message-history-filter.dto';
import { MessageEntity } from './schemas/messages.schema';
import CreateMessageDto from './dto/create-message.dto';

@Injectable()
export default class MessagesService {
  constructor(private readonly messagesRepository: MessagesRepository) {}

  getHistoryWithFilters(filters: MessageHistoryFilterDto): Promise<MessageEntity[]> {
    return this.messagesRepository.getHistoryWithFilters(filters);
  }

  createOne(message: CreateMessageDto): Promise<MessageEntity> {
    return this.messagesRepository.createOne(message);
  }
}
