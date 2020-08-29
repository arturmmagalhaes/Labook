import { UserDatabase } from '../data/UserDatabase';
import { SIGNUPDTO } from '../model/input/SignupDTO';
import { HashManager } from '../services/HashManager';
import { Authenticator } from '../services/Authenticator';
import { SignInDTO } from '../model/input/SigninDTO';

export class UserBusiness {
    
    private user = new UserDatabase();

    public async signUp (data: SIGNUPDTO): Promise<void> {
        try {
            if (!data.name || !data.email ||
                !data.password || !data.role) {
                    throw new Error ("Invalid Entry");
                }

            if (data.email.indexOf("@") === -1){
                throw new Error ("Invalid Email");
            }

            if (data.password.length < 6) {
                throw new Error ("password Must Contain 6 Characters");
            }

            await this.user.signUp(data);
            
        } catch (error) {
            throw new Error (error.message);
        }
    }

    public async signIn (data: SignInDTO): Promise<string> {
        try {
            if (!data.email || !data.password) {
                throw new Error ("Invalid Email or Password");
            }

            const result = await this.user.signIn(data.email);
            const hashManager = await new HashManager().compare(data.password, result.password);

            if(!hashManager) {
                throw new Error ("Invalid Email or Password");
            }

            const token = await new Authenticator().generateToken({
                id: result.id,
                role: result.role
            });
            
            return token;
        } catch (error) {
            throw new Error (error.message);
        }
    }
    
}