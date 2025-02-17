import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProjectValidations } from './project.validation';
import { ProjectControllers } from './project.controller';

const router = express.Router();

router.post(
  '/create-project',
  validateRequest(ProjectValidations.createProjectValidationSchema),
  ProjectControllers.createProject,
);

router.get('/:projectId', ProjectControllers.getSingleProject);

router.get('/', ProjectControllers.getAllProjects);

router.put(
  '/:projectId',
  validateRequest(ProjectValidations.updateProjectValidationSchema),
  ProjectControllers.updateProject,
);

router.delete('/:projectId', ProjectControllers.deleteProduct);

export const ProjectRoutes = router;
