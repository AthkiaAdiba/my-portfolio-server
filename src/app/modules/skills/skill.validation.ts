import { z } from 'zod';

const createSkillValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Skill name is required!' }),
    iconName: z.string({ required_error: 'Skill icon name is required!' }),
  }),
});

const updateSkillValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Skill name is required!' }).optional(),
    iconName: z
      .string({ required_error: 'Skill icon name is required!' })
      .optional(),
  }),
});

export const SkillValidations = {
  createSkillValidationSchema,
  updateSkillValidationSchema,
};
