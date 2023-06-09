import { UserDto } from "../user/user.dto";
import { UserEntity } from "../user/user.entity";


export const toUserDto = (data: UserEntity): UserDto => {
  const { id, firstname, lastname, email,role } = data;
  return {
    id,
    firstName: firstname,
    lastName: lastname,
    email,
    role,
  };
};
