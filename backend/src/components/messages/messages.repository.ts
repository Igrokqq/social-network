import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { MessageEntity } from './schemas/messages.schema';
import messagesConstants from './messages.constants';
import MessageHistoryFilterDto from './dto/message-history-filter.dto';
import CreateMessageDto from './dto/create-message.dto';

@Injectable()
export default class MessagesRepository {
  constructor(
    @InjectModel(messagesConstants.models.messages) private messagesModel: Model<MessageEntity>,
  ) {}

  getHistoryWithFilters(filters: MessageHistoryFilterDto): Promise<MessageEntity[]> {
    return this.messagesModel.find({
      $or: [
        {
          from: filters.from,
          toUserId: filters.toUserId,
        },
        {
          from: filters.toUserId,
          toUserId: filters.from,
        },
      ],
    }).lean().exec();
  }

  createOne(message: CreateMessageDto): Promise<MessageEntity> {
    return this.messagesModel.create(message);
  }
}
