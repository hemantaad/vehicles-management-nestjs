import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ unique: true, required: true, trim: true, lowercase: true })
  email: string;

  @Prop({ required: true, trim: true })
  password: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
