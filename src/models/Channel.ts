export default class Channel {
    name: string;
    description: string;
    created: null;
    modified: null;

    public constructor(init ?: Partial<Channel>) {
        Object.assign(this, init);
    }
}
