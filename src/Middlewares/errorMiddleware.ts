import { NextFunction, Request, Response } from 'express';

class ErrorMiddleware {
  public static handleError(error: Error, _req: Request, res: Response, next: NextFunction) {
    res.status(500).json({ message: error.message });
    next();
  }
}

export default ErrorMiddleware;