import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constant';
import { SkillValidations } from './skill.validation';
import { SkillControllers } from './skill.controller';

const router = express.Router();

router.post(
  '/create-skill',
  auth(USER_ROLE.admin),
  validateRequest(SkillValidations.createSkillValidationSchema),
  SkillControllers.createSkill,
);

router.get('/:skillId', auth(USER_ROLE.admin), SkillControllers.getSingleSkill);

router.get('/', SkillControllers.getAllSkills);

router.put(
  '/:skillId',
  auth(USER_ROLE.admin),
  validateRequest(SkillValidations.updateSkillValidationSchema),
  SkillControllers.updateSkill,
);

router.delete('/:skillId', auth(USER_ROLE.admin), SkillControllers.deleteSkill);

export const SkillRoutes = router;
