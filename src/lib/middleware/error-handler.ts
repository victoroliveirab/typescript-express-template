/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import HttpError from '@app/lib/errors/http-error';

export default function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error(err);
  if (err instanceof HttpError) {
    const { code, message, name } = err;
    res.status(code).send({ name, message });
    return;
  }
  res.status(500).send(err);
}
