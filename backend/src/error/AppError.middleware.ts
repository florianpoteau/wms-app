export default class AppError extends Error {
  statusCode: number;

  constructor(error: { statusCode: number; message: string }) {
    super(error.message);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = Error.name;
    this.statusCode = error.statusCode;
    Error.captureStackTrace(this);
  }
}
