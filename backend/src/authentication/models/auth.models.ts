
import { BadRequesError } from '../../utils';
import { Authenticate, UserSchemaModel, UserSignUpDTO,  createUserWrapper } from '../index';

class Auth {
  async signUp(value:UserSignUpDTO) {
 
      const { email, password } = value;

      // check if user exists
      const findUser = await UserSchemaModel.findOne({ email });
      if (findUser) throw new BadRequesError('user exists with these details');

      console.log("in signUp model")


      const encryptedPassword = Authenticate.hashPassword(password);

      const newUser = createUserWrapper({
        ...value,
        password: encryptedPassword,
      });

      const savedUser = await newUser.save();

      return savedUser;
  }

  async signIn(value) {
   
      const { email, password } = value;

      // check if user exists
      const foundUser = await UserSchemaModel.findOne({ email });
      if (!foundUser || (!foundUser.isActive)) throw new BadRequesError('wrong username or password');

      const storedPassword = foundUser.password;

      const isPasswordCorrect: boolean = Authenticate.comparePasswords(password, storedPassword);

      if (!isPasswordCorrect) throw new BadRequesError('wrong username or password');

      return {user:foundUser};
  
  }
}

export const AuthModel = new Auth();
