import { Request, Response, NextFuntion } from "express"
import { verify } from "jsonwebtoken"

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

  const { sub } = verify(token, process.env.JWT_SECRET)

}