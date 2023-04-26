import { Body, Controller, Delete, Get, Param, Put, Req } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDeleteDto, UserUpdateDto } from "./user.dto";
import { UpdateResult } from "typeorm";

@Controller("user")
export class UserController {

  constructor(private userService: UserService) {
  }

  @Get()
  async showAllUsers() {
    try {
      return await this.userService.showAllUsers();
    } catch (error) {
      return {
        statusCode: error.getStatus(),
        message: error.message
      };
    }
  }

  @Get(":id")
  async findOneById(@Param("id") id: number) {
    try {
      return await this.userService.findOneById(id);
    }
    catch (error) {
      return {
        statusCode: error.getStatus(),
        message: error.message
      };
    }
  }

  @Put()
  // todo check if user is logged and search id by payload
  async updateUser(@Body() userUpdateDto: UserUpdateDto) {
    try {
      return await this.userService.updateUser(userUpdateDto);
    }
    catch (error) {
      return {
        statusCode: error.getStatus(),
        message: error.message
      };
    }
  }

  @Delete(":id")
  // todo check if user is logged and admin
  async deleteUser(user: UserDeleteDto) {
    try {
      return await this.userService.deleteUser(user);
    }
    catch (error) {
      return {
        statusCode: error.getStatus(),
        message: error.message
      };
    }
  }

}
