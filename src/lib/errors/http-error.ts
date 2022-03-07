export default class HttpError extends Error {
  constructor(
    readonly name: string,
    readonly message: string,
    readonly code: number
  ) {
    super(message);

    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, new.target.prototype);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (this as any).__proto__ = new.target.prototype;
    }
  }
}
