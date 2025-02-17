import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidations } from './blog.validation';
import { BlogControllers } from './blog.controller';

const router = express.Router();

router.post(
  '/create-blog',
  validateRequest(BlogValidations.createBlogValidationSchema),
  BlogControllers.createBlog,
);

router.get('/:blogId', BlogControllers.getSingleBlog);

router.get('/', BlogControllers.getAllBlogs);

router.put(
  '/:blogId',
  validateRequest(BlogValidations.updateBlogValidationSchema),
  BlogControllers.updateBlog,
);

router.delete('/:blogId', BlogControllers.deleteBlog);

export const BlogRoutes = router;
