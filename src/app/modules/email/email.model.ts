import { model, Schema } from 'mongoose';
import { TEmail } from './email.interface';

const emailSchema = new Schema<TEmail>(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Name is required!'],
    },
    email: {
      type: String,
      trim: true,
      required: [true, 'Email is required!'],
    },
    subject: {
      type: String,
      trim: true,
      required: [true, 'Email subject is required!'],
    },
    message: {
      type: String,
      trim: true,
      required: [true, 'Message is required!'],
    },
  },
  { timestamps: true },
);

export const Email = model<TEmail>('Email', emailSchema);
