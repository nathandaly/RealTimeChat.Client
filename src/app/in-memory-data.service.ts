import { ActivityStatus } from './core/_shared/activity-status.enum';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import random from 'random-name';

export class InMemoryDataService implements InMemoryDbService {
  users: any[];
  numUsers = 10;
  numMessages = 20;

  /**
   * Main entry method which creates an in memory database.
   */
  createDb() {
    this.users = this.seedUsers();
    const users = this.users;
    const channels = this.seedChannels();
    const messages = this.seedMessages();

    return {
      users,
      messages,
      channels
    };
  }

  /**
   * Generate n number of random users.
   */
  private seedUsers(): any {
    const users = [];

    for (let i = 0; i < this.numUsers; i++ ) {
      const randomName = random();
      const statusArray = [ActivityStatus.OFFLINE, ActivityStatus.ONLINE, ActivityStatus.AWAY];

      users.push({
        username: randomName,
        name: randomName,
        status: statusArray[Math.floor(Math.random() * statusArray.length)],
        created: Date.now(),
        modified: Date.now()
      });
    }

    return users;
  }

  /**
   * Generate 6 channels.
   */
  private seedChannels(): any {
    const channels = [];
    const channelNames = ['general', 'code', 'design', 'product', 'random', 'tunes'];

    channelNames.map(val => channels.push({
      name: val,
      description: 'This channel is for ' + val + ' purposes',
      created: Date.now(),
      modified: Date.now()
    }));

    return channels;
  }

  /**
   * Generate n number of random of messages.
   */
  private seedMessages(): any {
    const messages = [];
    const statusArray = [ActivityStatus.OFFLINE, ActivityStatus.ONLINE, ActivityStatus.AWAY];

    for (let i = 0; i < this.numMessages; i++ ) {
      const randomName = random();
      const randomUser = this.users[Math.floor(Math.random() * this.users.length)];
      const message = {
        user: randomUser,
        content: 'Testing...',
        contentType: 'text/html',
        timestamp: Date.now()
      };

      messages.push(message);
    }

    return messages;
  }
}
