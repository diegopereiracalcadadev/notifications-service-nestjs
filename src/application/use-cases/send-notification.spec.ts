import { InMemoryNotificationsRepository } from '../../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const inMemoryRepo = new InMemoryNotificationsRepository();

    const sendNotification = new SendNotification(inMemoryRepo);

    const { notification } = await sendNotification.execute({
      content: 'This is notif.',
      category: 'social-categ',
      recipientId: 'example-recip-id',
    });

    expect(inMemoryRepo.notifications).toHaveLength(1);
    expect(inMemoryRepo.notifications[0]).toEqual(notification);
  });
});
