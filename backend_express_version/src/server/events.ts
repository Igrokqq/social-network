import * as http from 'http';

export default class Events {
  public static onError(error: NodeJS.ErrnoException, port: number | string | boolean): never {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bindPort = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    switch (error.code) {
      case 'EACCES':
        console.error(`${bindPort} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`${bindPort} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  public static onListening(port: number): void {
    console.log(`Listening on port ${port}`);
  }

  public static bind(Server: http.Server, port: number): void {
    Server.on('error', (error) => Events.onError(error, port));
    Server.on('listening', Events.onListening.bind(Server, port));
  }
}
