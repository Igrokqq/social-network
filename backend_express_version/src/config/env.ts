import * as dotenv from 'dotenv';

export default class Env {
  public static init(path: string): void {
    if (process.env.NODE_ENV !== 'production') {
      dotenv.config({
        path,
        debug: true,
      });
    }
  }
}
