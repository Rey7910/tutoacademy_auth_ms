import { Request, Response, NextFunction } from "express";

const loginMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers;
  const userAgent = header["user-agent"];
  console.log("Login User Agent: " + userAgent);
  next();
};

const logoutMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers;
  const userAgent = header["user-agent"];
  console.log("Logout User Agent: " + userAgent);
  next();
};

export { loginMiddleware , logoutMiddleware};
