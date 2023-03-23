import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from '../enums/role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  email: string;
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: Role.User, required: true })
  role: string;

  @Prop({ default: Date.now, required: true })
  created_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
