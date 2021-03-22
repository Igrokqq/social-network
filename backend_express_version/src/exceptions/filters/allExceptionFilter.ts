import { Request, Response, NextFunction } from 'express';

class AllExceptionFilter {
  public static catch(target: any, key: string, descriptor: PropertyDescriptor) {
    const oldValue = descriptor.value;

    // eslint-disable-next-line no-param-reassign
    descriptor.value = async function (args: { req: Request, res: Response, next: NextFunction }): Promise<any> {
      const { req, res, next } = args;

      try {
        await oldValue.call(this, req, res, next);
        return;
      } catch (error) {
        res.status(500).json({
          message: error.name,
          details: error.message,
        });

        // eslint-disable-next-line consistent-return
        return next(error);
      }
    };
  }
}

export const allExceptionFilter = AllExceptionFilter.catch;
