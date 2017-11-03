import { User } from './User';

export default class Message {
    user: User;
    content: any;
    type: null;
    timestamp: null;

    public constructor(init ?: Partial<Message>) {
        Object.assign(this, init);
    }
}
