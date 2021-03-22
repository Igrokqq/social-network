import * as Mongoose from 'mongoose';

interface Config {
  readonly url: string;
  readonly options: Mongoose.ConnectionOptions;
}

class MongodbConnection {
  private readonly orm: typeof Mongoose = Mongoose;

  private readonly config: Config;

  constructor() {
    this.config = {
      url: process.env.MONGODB_URL,
      options: {
        // automatically try to reconnect when it loses connection
        autoReconnect: true,
        // reconnect every reconnectInterval milliseconds
        // for reconnectTries times
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000,
        // flag to allow users to fall back to the old
        // parser if they find a bug in the new parse
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    };
  }

  private onConnected(): void {
    console.log(`Mongodb connected to ${this.config.url}`);
  }

  private onConnecting(): void {
    console.log(`Mongodb is trying to connect ${this.config.url}`);
  }

  private onDisconnected(): void {
    console.log(`Mongodb has been disconnected from ${this.config.url}`);
  }

  private onDisconnecting(): void {
    console.log(`Mongodb is disconnecting from ${this.config.url}`);
  }

  public createConnection(): Mongoose.Connection {
    const connection = this.orm.createConnection(this.config.url, this.config.options);
    connection.on('connected', () => this.onConnected());
    connection.on('connecting', () => this.onConnecting());
    connection.on('disconnected', () => this.onDisconnected());
    connection.on('disconnecting', () => this.onDisconnecting());

    return connection;
  }
}

export default new MongodbConnection().createConnection();
