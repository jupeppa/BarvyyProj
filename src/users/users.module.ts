import { Module } from "@nestjs/common";
import { Sequelize } from "sequelize";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.module";
import { RolesModule } from "src/roles/roles.module";


@Module({
  imports: [

    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
