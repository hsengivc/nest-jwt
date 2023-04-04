import { AuthGuard } from '@nestjs/passport';

export class RtGuard extends AuthGuard(process.env.REFRESH_GUARD_KEY) {
  constructor() {
    super();
  }
}
