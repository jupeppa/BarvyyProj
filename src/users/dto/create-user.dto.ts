import { ApiProperty } from "@nestjs/swagger"


export class CreateUserDto {
   
    @ApiProperty({example: 'user@mail.com', description:'email address'})
    readonly email: string
    @ApiProperty({example: '123Asd23', description:'password'})
    readonly password: string
  }