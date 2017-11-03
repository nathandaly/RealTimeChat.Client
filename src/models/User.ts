import { ActivityStatus } from '../utils/enums/ActivityStatus';

export class User {
    username: string;
    status: ActivityStatus;

    public constructor(init ?: User) {
        Object.assign(this, init);
    }
}
