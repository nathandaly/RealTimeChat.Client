export default class Channel {
    name: string;
    description: string;

    public constructor(init ?: Partial<Channel>) {
        Object.assign(this, init);
    }
}
