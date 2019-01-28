import { Request, Response } from "express";
import { createAuthorsLoader } from "src/utils/authorsLoader";

export interface MyContext {
  req: Request;
  res: Response;
  authorsLoader: ReturnType<typeof createAuthorsLoader>;
}
