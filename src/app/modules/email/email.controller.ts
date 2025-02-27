import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { EmailServices } from './email.service';

const createEmail = catchAsync(async (req, res) => {
  const result = await EmailServices.createEmailIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Email is sent successfully!',
    data: result,
  });
});

const getAllEmails = catchAsync(async (req, res) => {
  const result = await EmailServices.getAllEmailsFromDB();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Emails are got successfully!',
    data: result,
  });
});

export const EmailControllers = {
  createEmail,
  getAllEmails,
};
