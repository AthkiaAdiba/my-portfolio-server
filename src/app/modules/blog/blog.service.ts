import AppError from '../../errors/AppError';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';
import { StatusCodes } from 'http-status-codes';

const createBlogIntoDB = async (payload: TBlog) => {
  const result = await Blog.create(payload);

  return result;
};

const getAllBlogsFromDB = async () => {
  const result = await Blog.find();

  return result;
};

const getSingleBlogFromDB = async (id: string) => {
  const result = await Blog.findById(id);

  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This blog is not found !');
  }

  return result;
};

const updateBlogIntoDB = async (id: string, blogData: Partial<TBlog>) => {
  const blog = await Blog.findById(id);

  if (!blog) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This blog is not found !');
  }

  const result = await Blog.findByIdAndUpdate(id, blogData, {
    new: true,
  });

  if (!result) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'This blog is not updated !');
  }

  return result;
};

const deleteSingleBlogFromDB = async (id: string) => {
  const blog = await Blog.findById(id);

  if (!blog) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This blog is not found !');
  }

  const result = await Blog.findByIdAndDelete(id, {
    new: true,
  });

  if (!result) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'This blog is not deleted !');
  }

  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getSingleBlogFromDB,
  updateBlogIntoDB,
  deleteSingleBlogFromDB,
};
