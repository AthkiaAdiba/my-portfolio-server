import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { TUser } from '../auth/auth.interface';
import { User } from '../auth/auth.modal';

const getAllUsersFromDB = async () => {
  const result = await User.find();

  return result;
};

const getSingleIUserFromDB = async (id: string) => {
  const result = await User.findById(id);

  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This User is not exists!');
  }

  return result;
};

const getGoogleIUserFromDB = async (email: string) => {
  const result = await User.findOne({ email });

  if (!result) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This User is not exists!');
  }

  return result;
};

const updateUserInDB = async (id: string, payload: Partial<TUser>) => {
  const user = await User.findById(id);

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This User is not exists!');
  }

  const result = await User.findByIdAndUpdate(id, payload, {
    new: true,
  }).select('-password');

  return result;
};

const deleteSingleUserFromDB = async (id: string) => {
  const user = await User.findById(id);

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This User is not exists!');
  }

  const result = await User.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    },
  );

  return result;
};

const banUserIntoDB = async (id: string) => {
  const user = await User.findById(id);

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This User is not exists!');
  }

  const result = await User.findByIdAndUpdate(
    id,
    { status: 'ban' },
    {
      new: true,
    },
  );

  return result;
};

export const UserServices = {
  getAllUsersFromDB,
  getSingleIUserFromDB,
  getGoogleIUserFromDB,
  updateUserInDB,
  deleteSingleUserFromDB,
  banUserIntoDB,
};
