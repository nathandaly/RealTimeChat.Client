import { ActivityStatus } from '../utils/enums/ActivityStatus';

export class User {
    username: string;
    name: string;
    status: ActivityStatus;
    created: number;
    modified: number;

    public constructor(init ?: User) {
        Object.assign(this, init);
    }
}
