import * as Mongoose from 'mongoose';

const initMongodbConnection = () => import('./databases/mongodbConnection');

declare global {
    namespace NodeJS {
        interface Global {
            mongodbConnection: Mongoose.Connection;
        }
    }
}

export default class GlobalVariables {
  public static async init(): Promise<void> {
    global.mongodbConnection = (await initMongodbConnection()) as unknown as Mongoose.Connection;
  }
}
