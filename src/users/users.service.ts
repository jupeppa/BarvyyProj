import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userReposytory: typeof User,
                private roleService: RolesService) {}

    async createUser(dto: CreateUserDto ){
        const user = await this.userReposytory.create(dto)
        return user
    }

    async getAllusers(){
        const users = await this.userReposytory.findAll()
        return users
    }

}
