import { IsEmail, IsNotEmpty } from "class-validator";
import { Role } from "../auth/interface/role.enum";

export interface UserCreateDto {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface UserUpdateDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserDeleteDto {
  id: number;
}

export interface UserLoginDto {
  email: string;
  password: string;
}


export class UserDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  role: Role;

}