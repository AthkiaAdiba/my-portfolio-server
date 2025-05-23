import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constant';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidations } from './user.validation';

const router = express.Router();

router.get(
  '/',
  auth(USER_ROLE.admin),
  auth(USER_ROLE.admin),
  UserControllers.getAllUser,
);

router.get(
  '/:id',
  auth(USER_ROLE.user, USER_ROLE.admin),
  UserControllers.getSingleUser,
);

router.get('/email/:email', UserControllers.getGoogleUser);

router.put(
  '/:id',
  auth(USER_ROLE.user, USER_ROLE.admin),
  validateRequest(UserValidations.updateUserValidationSchema),
  UserControllers.updateUser,
);

router.put('/ban/:id', auth(USER_ROLE.admin), UserControllers.banUser);

router.delete(
  '/:id',
  auth(USER_ROLE.user, USER_ROLE.admin),
  UserControllers.deleteUser,
);

export const UserRoutes = router;
