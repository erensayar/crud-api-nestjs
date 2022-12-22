import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(40)
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(40)
    lastName: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    password: string;

    @IsNumber()
    @IsNotEmpty()
    @MaxLength(2)
    age: Number;

}