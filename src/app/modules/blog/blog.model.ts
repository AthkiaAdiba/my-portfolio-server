import { model, Schema } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Blog title is required!'],
    },
    image: {
      type: String,
      trim: true,
      required: [true, 'Blog images are required!'],
    },
    content: {
      type: String,
      trim: true,
      required: [true, 'Blog content is required!'],
    },
    category: {
      type: String,
      trim: true,
      required: [true, 'Blog category are required!'],
    },
    tags: {
      type: [String],
      trim: true,
      required: [true, 'Blog tags are required!'],
    },
    postDate: {
      type: String,
      trim: true,
      required: [true, 'Blog postDate is required!'],
    },
  },
  { timestamps: true },
);

export const Blog = model<TBlog>('Blog', blogSchema);
