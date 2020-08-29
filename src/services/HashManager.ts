import bcrypt from 'bcrypt';

export class HashManager {
    
    public async hash (password: string): Promise<string> {
        const rounds = Number(process.env.COST);
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(password, salt);
        return result;
    }

    public async compare (password: string, hash: string): Promise<Boolean> {
        return await bcrypt.compare(password, hash);
    }

}