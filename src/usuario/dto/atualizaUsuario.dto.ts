import { IsString , IsNotEmpty, IsEmail, MinLength, IsInt, IsOptional } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";



export class AlteraUsuarioDTO{

    @IsString()
    @IsNotEmpty({message: 'Nome não pode ser vazio!'})
    @IsOptional()
    nome: string;

    @IsEmail(undefined, {message: 'Email Invalido!'})
    @EmailUnico({message:"Esse email ja está sendo usado"})
    @IsOptional()
    email: string;
    
    @MinLength(6, {message: 'Senha Invalido!'})
    @IsOptional()
    senha: string;
    
    @IsInt({message: 'Idade Invalido!'})
    @IsOptional()
    idade:BigInteger;
    
    @IsString({message: 'Cidade Invalido!'})
    @IsOptional()
    cidade: string;
    
    @IsString({message: 'Telefone Invalido!'})
    @IsOptional()
    telefone: BigInteger;
    
}