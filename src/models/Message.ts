import { User } from './User';

export default class Message {
    id: number;
    user: User;
    content: any;
    contentType: string;
    timestamp: number;

    public constructor(init ?: Partial<Message>) {
        Object.assign(this, init);
    }
}
