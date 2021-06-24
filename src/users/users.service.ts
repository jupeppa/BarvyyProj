import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userReposytory: typeof User) {}

    async createUser(dto: CreateUserDto ){
        const user = await this.userReposytory.create(dto)
        return user
    }

    async getAllusers(){
        const users = await this.userReposytory.findAll()
        return users
    }

}
