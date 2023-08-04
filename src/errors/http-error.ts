export class HttpError extends Error {
  constructor(readonly status = 500, readonly message: string) {
    super(message);
    this.name = "HttpError";
  }

  static badRequest(message = "BadRequest") {
    return new HttpError(400, message);
  }

  static unauthorized(message = "Unauthorized") {
    return new HttpError(401, message);
  }

  static forbidden(message = "Forbidden") {
    return new HttpError(403, message);
  }

  static conflict(message = "Conflict") {
    return new HttpError(409, message);
  }

  static serverError(message = "ServerError") {
    return new HttpError(500, message);
  }
}
