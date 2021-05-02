import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HomeLayout from '../layouts/Home';
import { PageComponentProps } from '../routes';
import TextInput from '../components/Ui/TextInput';
import AuthHelper from '../helpers/Auth';
import { UserEntity } from '../api/User';
import MessagesDirectList from '../components/MessagesDirectList';

type MessagesDirectParams = {
  readonly userId: string;
}

export type MessageEntity = {
  readonly _id: string;
  readonly from: string;
  readonly text: string;
  readonly toUserId: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
type UpdateMessagesListParams = {
  readonly from: string;
  readonly toUserId: string;
  readonly setMessagesFn: (messages: MessageEntity[]) => void;
}
export default function MessagesDirect({ socket }: PageComponentProps): JSX.Element {
  const [messages, setMessages] = useState<MessageEntity[]>([]);
  const [user] = useState<UserEntity | null>(AuthHelper.getUser());
  const [messageText, setMessageText] = useState<string>('');
  const { userId: toUserId }: MessagesDirectParams = useParams();

  const _updateMessagesList = ({
    from,
    toUserId,
    setMessagesFn,
  }: UpdateMessagesListParams): void => {
    socket.emit('messages_history', JSON.stringify({
      toUserId,
      from,
    }));
    socket.on('messages_history', (json: string): void => {
      const messages: MessageEntity[] = JSON.parse(json);

      if (messages && messages.length) {
        setMessagesFn(messages);
      }
    });
  };

  useEffect(() => {
    if (user) {
      _updateMessagesList({
        toUserId,
        from: user._id,
        setMessagesFn: setMessages,
      });
    }

    return (): void => {
      socket.off('messages_history');
    };
  }, []);

  const _onMessageInput = function (text: string): void {
    setMessageText(text || '');
  };
  const _onEnter = function (): void {
    setMessageText('');

    if (user && (messageText && messageText.length)) {
      socket.emit('message', JSON.stringify({
        toUserId,
        text: messageText,
        from: user._id,
      }));
      _updateMessagesList({
        toUserId,
        from: user._id,
        setMessagesFn: setMessages,
      });
    }
  };

  return (
    <HomeLayout>
      <div className="d-flex flex-column justify-content-between h-100">
        <MessagesDirectList items={messages} currentUserId={user ? user._id : ''} />
        <TextInput
          value={messageText}
          onInput={_onMessageInput}
          onEnter={_onEnter}
          autoComplete="off"
        />
      </div>
    </HomeLayout>
  );
}
