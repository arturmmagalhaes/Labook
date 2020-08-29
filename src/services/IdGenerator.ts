import { v4 } from 'uuid';

export class IdGenerator {
    static generateId: any;

    public generateId(): string {
        return v4();
    }
}