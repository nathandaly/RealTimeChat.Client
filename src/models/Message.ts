import { User } from './User';

export default class Message {
    user: User;
    content: string;
    type: null;
    timestamp: null;

    public constructor(init ?: Partial<Message>) {
        Object.assign(this, init);
    }
}
