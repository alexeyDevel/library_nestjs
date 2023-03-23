import { Role } from '../enums/role.enum';
import { hashPassword } from '../utils/users.utils';

export interface IUser {
  email: string;
  password: string;
}

export class CreateUserDto {
  email: string;
  firstName: string;
  password: string;
  created_at: string;
  role: string;
  constructor(
    email: string,
    firstName: string,
    password: string,
    role?: string,
    create_at?: string,
  ) {
    this.email = email;
    this.firstName = firstName;
    this.password = password;
    this.created_at = create_at ? create_at : new Date().toISOString();
    this.role = role ? role : Role.User;
  }
}
