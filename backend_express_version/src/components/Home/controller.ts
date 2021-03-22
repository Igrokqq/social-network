import { Response as ExpressResponse, Request as ExpressRequest } from 'express';
import HomeService from './service';

export default class HomeController {
  public static ping(req: ExpressRequest, res: ExpressResponse) {
    return res.send(HomeService.getPingMessage());
  }
}
