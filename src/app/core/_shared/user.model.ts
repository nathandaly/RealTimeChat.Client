import { ActivityStatus } from './activity-status.enum';
import Channel from '../../sidebar/_shared/channel.model';

export default class User {
    id: number;
    username: string;
    name: string;
    status: ActivityStatus;
    created: number;
    modified: number;
    channels: Channel[];

    public constructor(init ?: User) {
        Object.assign(this, init);
    }
}
