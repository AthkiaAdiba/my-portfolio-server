import { sendEmail } from '../../utils/sendEmail';
import { TEmail } from './email.interface';
import { Email } from './email.model';

const createEmailIntoDB = async (payload: TEmail) => {
  const result = await Email.create(payload);

  sendEmail(payload);

  return result;
};

const getAllEmailsFromDB = async () => {
  const result = await Email.find();

  return result;
};

export const EmailServices = {
  createEmailIntoDB,
  getAllEmailsFromDB,
};
