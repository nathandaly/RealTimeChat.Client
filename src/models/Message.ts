export default class Message {
    user: null;
    text: string;
    datetime: null;

    public constructor(init ?: Partial<Message>) {
        Object.assign(this, init);
    }
}
