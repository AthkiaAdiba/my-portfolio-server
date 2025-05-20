import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { TProject } from './project.interface';
import { Project } from './project.model';

const createProjectIntoDB = async (payload: TProject) => {
  const result = await Project.create(payload);

  return result;
};

const getAllProjectsFromDB = async () => {
  const result = await Project.find().sort({ createdAt: -1 });

  return result;
};

const getSingleProjectFromDB = async (id: string) => {
  const result = await Project.findById(id);

  if (!result) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'This project is not found!');
  }

  return result;
};

const updateProjectIntoDB = async (
  id: string,
  projectData: Partial<TProject>,
) => {
  const project = await Project.findById(id);

  if (!project) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'This project is not found!');
  }

  const result = await Project.findByIdAndUpdate(id, projectData, {
    new: true,
  });

  if (!result) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'This project is not updated!');
  }

  return result;
};

const deleteSingleProjectFromDB = async (id: string) => {
  const project = await Project.findById(id);

  if (!project) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'This project is not found!');
  }

  const result = await Project.findByIdAndDelete(id, {
    new: true,
  });

  return result;
};

export const ProjectServices = {
  createProjectIntoDB,
  getAllProjectsFromDB,
  getSingleProjectFromDB,
  updateProjectIntoDB,
  deleteSingleProjectFromDB,
};
