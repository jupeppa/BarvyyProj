import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private UsersService: UsersService){}

    @ApiOperation({summary:'Creating a user'})
    @ApiResponse({status:200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.UsersService.createUser(userDto)
    }

    @ApiOperation({summary:'Returning all users'})
    @ApiResponse({status:200, type: [User]})
    @Get()
    getAll(){
        return this.UsersService.getAllusers()
    }


}
