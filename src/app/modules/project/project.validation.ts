import { z } from 'zod';

const createProjectValidationSchema = z.object({
  body: z.object({
    projectName: z.string({ required_error: 'Project name is required!' }),
    image: z.array(z.string().trim()).nonempty('Project images are required!'),
    projectDescription: z.string({
      required_error: 'Project description is required!',
    }),
    features: z
      .array(z.string().trim())
      .nonempty('Project images are required!'),
    technologies: z.string({
      required_error: 'Project technologies are required!',
    }),
    liveLink: z.string({ required_error: 'Project live link is required!' }),
    serverCodeLink: z.string({
      required_error: 'Project server code link is required!',
    }),
    clientCodeLink: z.string({
      required_error: 'Project client code link is required!',
    }),
  }),
});

const updateProjectValidationSchema = z.object({
  body: z.object({
    projectName: z.string().optional(),
    image: z
      .array(z.string().trim())
      .nonempty('Project images are required!')
      .optional(),
    projectDescription: z.string().optional(),
    features: z
      .array(z.string().trim())
      .nonempty('Project images are required!')
      .optional(),
    technologies: z.string().optional(),
    liveLink: z.string().optional(),
    serverCodeLink: z.string().optional(),
    clientCodeLink: z.string().optional(),
  }),
});

export const ProjectValidations = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
