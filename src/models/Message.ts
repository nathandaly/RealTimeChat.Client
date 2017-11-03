import { User } from './User';

export default class Message {
    user: User;
    text: string;
    timestamp: null;

    public constructor(init ?: Partial<Message>) {
        Object.assign(this, init);
    }
}
