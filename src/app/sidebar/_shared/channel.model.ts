export default class Channel {
    id: number;
    name: string;
    description: string;
    created: null;
    modified: null;
    locked: boolean;

    public constructor(init ?: Partial<Channel>) {
        Object.assign(this, init);
    }
}
