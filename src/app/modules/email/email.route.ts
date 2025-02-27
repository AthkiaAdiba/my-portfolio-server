import express from 'express';
import { EmailControllers } from './email.controller';
import validateRequest from '../../middlewares/validateRequest';
import { EmailValidations } from './email.validation';

const router = express.Router();

router.post(
  '/send-email',
  validateRequest(EmailValidations.createEmailValidationSchema),
  EmailControllers.createEmail,
);

router.get('/', EmailControllers.getAllEmails);

export const EmailRoutes = router;
