import { user } from '@prisma/client';
import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: Omit<user, 'password'>;
}
