import { IsOptional, IsString, NotEquals } from "class-validator";

export default class UpdatePostDto {
  @IsOptional()
  @IsString()
  @NotEquals("")
  title?: string;

  @IsOptional()
  @IsString()
  @NotEquals("")
  content?: string;
}