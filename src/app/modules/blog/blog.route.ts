import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidations } from './blog.validation';
import { BlogControllers } from './blog.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constant';

const router = express.Router();

router.post(
  '/create-blog',
  auth(USER_ROLE.admin),
  validateRequest(BlogValidations.createBlogValidationSchema),
  BlogControllers.createBlog,
);

router.get('/:blogId', BlogControllers.getSingleBlog);

router.get('/', BlogControllers.getAllBlogs);

router.put(
  '/:blogId',
  auth(USER_ROLE.admin),
  validateRequest(BlogValidations.updateBlogValidationSchema),
  BlogControllers.updateBlog,
);

router.delete('/:blogId', auth(USER_ROLE.admin), BlogControllers.deleteBlog);

export const BlogRoutes = router;
