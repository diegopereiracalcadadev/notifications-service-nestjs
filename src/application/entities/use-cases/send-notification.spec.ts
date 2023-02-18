import { Notification } from '../notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationsRepositoryDummy = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepositoryDummy);

    await sendNotification.execute({
      content: 'This is notif.',
      category: 'social-categ',
      recipientId: 'example-recip-id',
    });

    expect(notifications).toHaveLength(1);
  });
});
