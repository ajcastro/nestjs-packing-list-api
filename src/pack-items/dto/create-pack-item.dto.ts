import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePackItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
