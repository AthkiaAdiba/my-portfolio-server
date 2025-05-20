import { z } from 'zod';

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Blog title is required!' }),
    image: z.string({ required_error: 'Blog image is required!' }),
    content: z.string({ required_error: 'Blog content is required!' }),
    tags: z.array(z.string().trim()).nonempty('Blog tags are required!'),
    category: z.string({ required_error: 'Blog category is required!' }),
  }),
});

const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    image: z.string().optional(),
    content: z.string().optional(),
    tags: z
      .array(z.string().trim())
      .nonempty('Blog tags are required!')
      .optional(),
    category: z.string().optional(),
  }),
});

export const BlogValidations = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
