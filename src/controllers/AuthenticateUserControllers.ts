import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserControllers {
  async handle(request: Request, response: Response){

    const service = new AuthenticateUserService();
    service.execute()
  }
}

export { AuthenticateUserControllers }