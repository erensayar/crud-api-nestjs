import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateNoteDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100000)
    content: string;

}
