import { CanActivate, ExecutionContext } from '@nestjs/common';

export class MockGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    return true;
  }
}
