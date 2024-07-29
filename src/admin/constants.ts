import 'dotenv/config'

export const DEFAULT_ADMIN = {
  email: process.env.APP_ADMIN_USERNAME,
  password: process.env.APP_ADMIN_PASSWORD,
};
