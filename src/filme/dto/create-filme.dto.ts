import { IsString, IsNotEmpty, } from "class-validator";

export class CreateFilmeDto {
    @IsString()
    @IsNotEmpty()
    namefilme: string

    @IsString()
    @IsNotEmpty()
    nameenglish: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    @IsNotEmpty()
    totaleps: string

    @IsString()
    @IsNotEmpty()
    totaltemp: string

    @IsString()
    @IsNotEmpty()
    image: string

}
