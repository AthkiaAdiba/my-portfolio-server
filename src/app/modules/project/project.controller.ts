import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProjectServices } from './project.service';
import { StatusCodes } from 'http-status-codes';

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProjectIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project is created successfully!',
    data: result,
  });
});

const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjectsFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Projects are retrieved successfully!',
    data: result,
  });
});

const getSingleProject = catchAsync(async (req, res) => {
  const { projectId } = req.params;

  const result = await ProjectServices.getSingleProjectFromDB(projectId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project is retrieved successfully!',
    data: result,
  });
});

const updateProject = catchAsync(async (req, res) => {
  const { projectId } = req.params;
  const projectData = req.body;

  const result = await ProjectServices.updateProjectIntoDB(
    projectId,
    projectData,
  );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project is updated successfully!',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const { projectId } = req.params;

  await ProjectServices.deleteSingleProjectFromDB(projectId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Project is deleted successfully!',
    data: {},
  });
});

export const ProjectControllers = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProduct,
};
