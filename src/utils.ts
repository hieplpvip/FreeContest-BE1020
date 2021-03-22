import bcrypt from 'bcryptjs';

const getTimestamp = (): number => {
  return +new Date();
};

const hashPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export { getTimestamp, hashPassword };
