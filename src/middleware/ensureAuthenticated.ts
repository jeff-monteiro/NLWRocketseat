import { Request, Response, NextFuntion } from "express"

export function ensureAuthenticated (
  request: Request,
  response: Response, 
  next: NextFuntion
) {
  const authToken = request.headers.authorization;

  if(!authToken){
    return response.status(401).json({
      errorCode: "token.invalid",
    });
  }
  const [, token ] = authToken.split(" ")

}