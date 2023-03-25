import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    // TODO: compare hashes
    if (user && user.password === password) {
      delete user.password;
      return user;
    }
    return null;
  }
}

