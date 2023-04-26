import { Body, Controller, Delete, Get, Param, Put, Request, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDeleteDto, UserUpdateDto } from "./user.dto";
import { UpdateResult } from "typeorm";
import { HasRoles } from "../auth/has-roles.decorator";
import { Role } from "../auth/interface/role.enum";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard } from "../auth/roles.guard";

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
  @UseGuards(AuthGuard("jwt"))
  async updateUser(@Request() req, @Body() userUpdateDto: UserUpdateDto) {
    try {
      return await this.userService.updateUser(req.user.id,userUpdateDto);
    }
    catch (error) {
      return {
        statusCode: error.getStatus(),
        message: error.message
      };
    }
  }

  @Delete(":id")
  @HasRoles(Role.Admin)
  @UseGuards(AuthGuard("jwt"), RolesGuard)
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
