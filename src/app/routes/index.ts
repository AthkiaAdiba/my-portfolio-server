import { Router } from 'express';
import { ProjectRoutes } from '../modules/project/project.route';
import { BlogRoutes } from '../modules/blog/blog.route';
import { EmailRoutes } from '../modules/email/email.route';

const router = Router();

const moduleRoutes = [
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
