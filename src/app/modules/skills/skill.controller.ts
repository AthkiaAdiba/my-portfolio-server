import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { SkillServices } from './skill.service';

const createSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.createSkillIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Skill is created successfully!',
    data: result,
  });
});

const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillServices.getAllSkillsFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Skills are retrieved successfully!',
    data: result,
  });
});

const getSingleSkill = catchAsync(async (req, res) => {
  const { skillId } = req.params;

  const result = await SkillServices.getSingleSkillFromDB(skillId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Skill is retrieved successfully!',
    data: result,
  });
});

const updateSkill = catchAsync(async (req, res) => {
  const { skillId } = req.params;
  const skillData = req.body;

  const result = await SkillServices.updateSkillIntoDB(skillId, skillData);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Skill is updated successfully!',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const { skillId } = req.params;

  await SkillServices.deleteSingleSkillFromDB(skillId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Skill is deleted successfully!',
    data: {},
  });
});

export const SkillControllers = {
  createSkill,
  getAllSkills,
  getSingleSkill,
  updateSkill,
  deleteSkill,
};
