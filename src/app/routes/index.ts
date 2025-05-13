import { Router } from 'express';
import { ProjectRoutes } from '../modules/project/project.route';
import { BlogRoutes } from '../modules/blog/blog.route';
import { EmailRoutes } from '../modules/email/email.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/user/user.route';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
