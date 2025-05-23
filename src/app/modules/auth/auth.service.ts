import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { TLoginUser, TUser } from './auth.interface';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../config';
import { createToken } from './auth.utils';
import { User } from './auth.modal';

const registerUserIntoDB = async (payload: TUser) => {
  const user = await User.isUserExists(payload?.email);

  if (user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This user is already exist!');
  }

  const result = await User.create(payload);

  return result;
};

const loginUserIntoDB = async (payload: TLoginUser) => {
  //   checking if the user is exists
  const user = await User.isUserExists(payload?.email);

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This user is not found!');
  }

  if (!user._id) {
    throw new AppError(StatusCodes.NOT_FOUND, 'The user _id is not found!');
  }

  if (user.status === 'ban') {
    throw new AppError(StatusCodes.NOT_FOUND, 'The user is Banned!');
  }

  const idString = user._id.toString();
  // console.log(idString);

  // // checking if the password is correct
  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(StatusCodes.FORBIDDEN, 'Password does not match!');
  }

  // create token and sent to the client
  const jwtPayload = {
    userId: idString,
    userEmail: user?.email,
    role: user?.role,
    name: user?.name,
    image: user?.image,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string) => {
  // check if the token is valid
  const decoded = jwt.verify(
    token,
    config.jwt_refresh_secret as string,
  ) as JwtPayload;

  const { userEmail } = decoded;

  //   checking if the user is exists
  const user = await User.isUserExists(userEmail);

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This user is not found!');
  }

  if (!user._id) {
    throw new AppError(StatusCodes.NOT_FOUND, 'The user _id is not found!');
  }

  if (user.status === 'ban') {
    throw new AppError(StatusCodes.NOT_FOUND, 'The user is Banned!');
  }

  const idString = user._id.toString();

  // create token and sent to the client
  const jwtPayload = {
    userId: idString,
    userEmail: user?.email,
    role: user?.role,
    name: user?.name,
    image: user?.image,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
  };
};

export const AuthServices = {
  registerUserIntoDB,
  loginUserIntoDB,
  refreshToken,
};
