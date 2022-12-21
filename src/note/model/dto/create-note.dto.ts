import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateNoteDto {

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    title: string;

    @IsString()
    @MaxLength(100000)
    @IsNotEmpty()
    content: string;
}
