import { IsNotEmpty, IsString } from "class-validator";

export default class CreatePostDto {
  @IsNotEmpty({
    message: 'Must contain title',
  })
  @IsString()
  title: string;

  @IsNotEmpty({
    message: 'Must contain content',
  })
  @IsString()
  content: string;
}