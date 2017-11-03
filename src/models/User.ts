import { ActivityStatus } from './../app/utils/enums/ActivityStatus';

export class User {
    username: string;
    status: ActivityStatus;

    public constructor(init ?: User) {
        Object.assign(this, init);
    }
}
