import * as jwt from 'jsonwebtoken';

export interface AuthenticationData {
    id: string
    role: string
}

export class Authenticator {
    
    public generateToken (input: AuthenticationData): string {
        const result = jwt.sign(
            {
                id: input.id,
                role: input.role
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
            }
        );

        return result;
    }

    public getData (token: string) {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.id,
            role: payload.role
        }
        return result;
    }
}