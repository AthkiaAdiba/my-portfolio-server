import express from 'express';
import { EmailControllers } from './email.controller';
import validateRequest from '../../middlewares/validateRequest';
import { EmailValidations } from './email.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constant';

const router = express.Router();

router.post(
  '/send-email',
  validateRequest(EmailValidations.createEmailValidationSchema),
  EmailControllers.createEmail,
);

router.get('/', auth(USER_ROLE.admin), EmailControllers.getAllEmails);

export const EmailRoutes = router;
