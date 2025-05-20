import { model, Schema } from 'mongoose';
import { TSkill } from './skill.interface';

const skillSchema = new Schema<TSkill>(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Skill name is required!'],
    },
    iconName: {
      type: String,
      trim: true,
      required: [true, 'Icon Name images are required!'],
    },
  },
  { timestamps: true },
);

export const Skill = model<TSkill>('Skill', skillSchema);
