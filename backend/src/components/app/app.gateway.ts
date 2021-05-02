import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export default class AppGateway {
  @WebSocketServer()
  readonly server: Server | undefined;

  handleConnection(socket: Socket): void {
    if (this.server) {
      this.server.emit('connected', 'you are connected now');
      socket.emit('connected', JSON.stringify('test'));
    }
  }
}
