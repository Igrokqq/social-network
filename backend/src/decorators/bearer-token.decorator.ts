import { createParamDecorator, ExecutionContext } from '@nestjs/common';

const BearerToken = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest();

    return request.headers.authentication;
  },
);

export default BearerToken;
