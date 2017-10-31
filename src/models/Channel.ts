export default class Channel {
    name: string;
    description: string;
    subscribers: null;

    public constructor(init ?: Partial<Channel>) {
        Object.assign(this, init);
    }
}
