export class Dados{
    private email = "contato@appbom.com.br";
    private senha =  "BOM123";

    public GetValue(){
      return {email: this.email, senha: this.senha}
    }
    
}