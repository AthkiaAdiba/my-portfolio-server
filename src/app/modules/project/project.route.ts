import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProjectValidations } from './project.validation';
import { ProjectControllers } from './project.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constant';

const router = express.Router();

router.post(
  '/create-project',
  auth(USER_ROLE.admin),
  validateRequest(ProjectValidations.createProjectValidationSchema),
  ProjectControllers.createProject,
);

router.get('/:projectId', ProjectControllers.getSingleProject);

router.get('/', ProjectControllers.getAllProjects);

router.put(
  '/:projectId',
  auth(USER_ROLE.admin),
  validateRequest(ProjectValidations.updateProjectValidationSchema),
  ProjectControllers.updateProject,
);

router.delete(
  '/:projectId',
  auth(USER_ROLE.admin),
  ProjectControllers.deleteProduct,
);

export const ProjectRoutes = router;
