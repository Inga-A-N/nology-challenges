import { UniqueConstraintViolationException } from '@mikro-orm/core';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';

@Catch(UniqueConstraintViolationException)
export class UniqueConstraintFilter implements ExceptionFilter {
  catch(ex: UniqueConstraintViolationException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const { name: errorName, sqlMessage } = ex;
    // I have the ability to do whatever I want with my error message
    response.status(400).json({
      error: errorName,
      message: sqlMessage,
      statusCode: 400,
      timeStamp: Date.now(),
      path: request.url,
    });
  }
}
