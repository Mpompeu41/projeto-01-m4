import { IsString, IsNotEmpty, IsOptional, IsBoolean } from "class-validator";

export class UpdateFilmeDto {

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    namefilme: string

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    totaleps: string

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    totaltemp: string

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    image: string
}

export class WatchedDto {
    
    @IsBoolean()
    assistido: boolean;
   
}
