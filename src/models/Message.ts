import { User } from './User';

export default class Message {
    user: User;
    text: string;
    datetime: null;

    public constructor(init ?: Partial<Message>) {
        Object.assign(this, init);
    }
}
