/**
* Receber code(string)
* Recuperar o acess_token no github
* Verificar se o usuário existe no DB
*----SIM = Gera um token
*----NAO = Cria no DB, gera um token
 */

class AuthenticateUserService{
  async execute(code: string){

  }
}

export { AuthenticateUserService };