import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { TSkill } from './skill.interface';
import { Skill } from './skill.modal';

const createSkillIntoDB = async (payload: TSkill) => {
  const result = await Skill.create(payload);

  return result;
};

const getAllSkillsFromDB = async () => {
  const result = await Skill.find().sort({ createdAt: -1 });

  return result;
};

const getSingleSkillFromDB = async (id: string) => {
  const result = await Skill.findById(id);

  if (!result) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'This skill is not found!');
  }

  return result;
};

const updateSkillIntoDB = async (id: string, skillData: Partial<TSkill>) => {
  const skill = await Skill.findById(id);

  if (!skill) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'This skill is not found!');
  }

  const result = await Skill.findByIdAndUpdate(id, skillData, {
    new: true,
  });

  if (!result) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'This skill is not updated!');
  }

  return result;
};

const deleteSingleSkillFromDB = async (id: string) => {
  const skill = await Skill.findById(id);

  if (!skill) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'This skill is not found!');
  }

  const result = await Skill.findByIdAndDelete(id, {
    new: true,
  });

  return result;
};

export const SkillServices = {
  createSkillIntoDB,
  getAllSkillsFromDB,
  getSingleSkillFromDB,
  updateSkillIntoDB,
  deleteSingleSkillFromDB,
};
