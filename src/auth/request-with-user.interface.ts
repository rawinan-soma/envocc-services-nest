import { user } from '@service-client';
import { Request } from 'express';

export interface RequestWithUser extends Request {
  user: user;
}
