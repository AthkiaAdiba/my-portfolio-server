import { model, Schema } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>(
  {
    projectName: {
      type: String,
      trim: true,
      required: [true, 'Project name is required!'],
    },
    image: {
      type: [String],
      trim: true,
      required: [true, 'Project images are required!'],
    },
    projectDescription: {
      type: String,
      trim: true,
      required: [true, 'Project Description is required!'],
    },
    features: {
      type: [String],
      trim: true,
      required: [true, 'Project features are required!'],
    },
    technologies: {
      type: String,
      trim: true,
      required: [true, 'Project technologies are required!'],
    },
    liveLink: {
      type: String,
      trim: true,
      required: [true, 'Project live link is required!'],
    },
    serverCodeLink: {
      type: String,
      trim: true,
      required: [true, 'Project server code is required!'],
    },
    clientCodeLink: {
      type: String,
      trim: true,
      required: [true, 'Project client code is required!'],
    },
  },
  { timestamps: true },
);

export const Project = model<TProject>('Project', projectSchema);
