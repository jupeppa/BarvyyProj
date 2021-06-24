import { ApiProperty } from '@nestjs/swagger'
import {BelongsToMany, Column, DataType, Model, Table} from 'sequelize-typescript'
import { Role } from 'src/roles/roles.model'
import { UserRoles } from '../roles/user-roles.module'


interface UserCreationAttrs{
    email:string
    password: string
}
@Table({tableName:'users'})
export class User extends Model<User, UserCreationAttrs >{
    @ApiProperty({example: '1', description:'Unique identifier'})
    @Column({type: DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id: number

    @ApiProperty({example: 'name.surname@email.com', description:'@email'})
    @Column({type: DataType.STRING, unique:true, allowNull:false})
    email: string

    @ApiProperty({example: '123asdASd123', description:'password'})
    @Column({type: DataType.STRING, allowNull:false})
    password:string

    @ApiProperty({example: 'true', description:'Ban status'})
    @Column({type: DataType.BOOLEAN, defaultValue:false})
    banned:boolean

    @ApiProperty({example: 'Rude language', description:'Reason for a ban'})
    @Column({type: DataType.STRING, allowNull:true})
    bannedReason:string

    @BelongsToMany(()=>Role, ()=>UserRoles)
    roles: Role[] 

} 