import { Router } from 'express';
import { ProjectRoutes } from '../modules/project/project.route';
import { BlogRoutes } from '../modules/blog/blog.route';
import { EmailRoutes } from '../modules/email/email.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/user/user.route';
import { SkillRoutes } from '../modules/skills/skill.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/emails',
    route: EmailRoutes,
  },
  {
    path: '/skills',
    route: SkillRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
