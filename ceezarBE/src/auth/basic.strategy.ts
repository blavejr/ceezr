import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport';
import { Request } from "express";

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy, 'basic') {
  constructor() {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const validUsername = 'admin';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
      return { username };
    }
    // throw new UnauthorizedException();
    return null
    
  }

  async authenticate(req: Request): Promise<void> {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      // return a 401 Unauthorized error.
      throw new UnauthorizedException();
    }

    // extract the user's credentials.
    const [, base64Credentials] = authHeader!.split(' ');
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    // Validate the user's credentials.
    const user = await this.validate(username, password);
    if (user === null) {
        this.fail('Unauthorized')
    }
    this.success(user);
  }
  
}
