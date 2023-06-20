import { IsString , IsNotEmpty, IsEmail, MinLength, IsInt } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class UsuarioDTO{

    @IsString()
    @IsNotEmpty({message: 'Nome não pode ser vazio!'})
    nome: string;

    @IsEmail(undefined, {message: 'Email Invalido!'})
    @EmailUnico({message:"Esse email ja está sendo usado"})
    email: string;
    
    @MinLength(6, {message: 'Senha Invalido!'})
    senha: string;
    
    @IsInt({message: 'Idade Invalido!'})
    idade:BigInteger;
    
    @IsString({message: 'Cidade Invalido!'})
    cidade: string;
    
    @IsString({message: 'Telefone Invalido!'})
    telefone: BigInteger;
    
}