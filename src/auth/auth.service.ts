import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../users/schemas/user.schema';
import { hashPassword } from '../users/utils/users.utils';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}
  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email: email }).exec();
  }
  async validateUser(email: string): Promise<any> {
    const user = await this.findByEmail(email);

    if (user) {
      return user;
    }
    return null;
  }
  createToken(user: any) {
    return this.jwtService.sign({
      id: user._id,
      email: user.email,
      firstName: user.firstName,
    });
  }
}
