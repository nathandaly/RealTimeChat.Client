import { ActivityStatus } from './core/_shared/activity-status.enum';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import random from 'random-name';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const messages = this.generateMessages();

    return {messages};
  }

  private generateMessages(): any {
    const messages = [];
    const statusArray = [ActivityStatus.OFFLINE, ActivityStatus.ONLINE, ActivityStatus.AWAY];

    for (let i = 0; i < 20; i++ ) {
      const randomName = random();

      const message = {
        user: {
          username: randomName,
          name: randomName,
          status: statusArray[Math.floor(Math.random() * statusArray.length)],
          created: Date.now(),
          modified: Date.now()
        },
        content: 'Testing...',
        contentType: 'text/html',
        timestamp: Date.now()
      };

      messages.push(message);
    }

    return messages;
  }
}
