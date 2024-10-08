import { randomBytes, createHmac } from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

class Authentication {
  SECRET = process.env.SECRET;

  pwdSaltHash(salt: string, password: string) {
    return createHmac('sha256', [salt, password].join('/')).update(this.SECRET).digest('hex');
  }

  hashPassword(password: string) {
    const salt = randomBytes(8).toString('base64');
    const joinedSaltAndPwdSaltHash = [this.pwdSaltHash(salt, password), salt].join('%');

    return joinedSaltAndPwdSaltHash;
  }

  comparePasswords(password: string, storedPassword: string) {
    const [hashedPassword, salt] = storedPassword.split('%');
    return this.pwdSaltHash(salt, password) === hashedPassword;
  }
}

export const Authenticate = new Authentication();
