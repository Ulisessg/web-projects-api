import { Request, Response } from 'express';

function success(req: Request, res: Response, statusCode: number = 200, message: string = 'Success') {
  res.status(statusCode).json({
    error: false,
    message,
  });
}

function error(
  req: Request,
  res: Response,
  statusCode: number = 500,
  userMessage: string = 'Internal Server Error',
  adminMessage: string = 'Tell me where is the error',
) {
  res.status(statusCode).json({
    error: true,
    message: userMessage,
  });
  console.log({
    error: true,
    adminMessage,
  });
}

module.exports = { success, error };
