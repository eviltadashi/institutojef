import { IsBase64, IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class ProgressDTO {

    @IsBoolean({message:'Campo só pode ser true ou false'})
    visualizado: boolean

}

