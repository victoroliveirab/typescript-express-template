import HttpError from './http-error';

export default class NotFoundError extends HttpError {
  constructor(readonly message: string) {
    super('not_found', message, 404);
  }
}
