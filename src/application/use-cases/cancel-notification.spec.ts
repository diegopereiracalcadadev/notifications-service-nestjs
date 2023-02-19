import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';

describe('Cancel Notification', () => {
  it('should be able to cancel a notification', async () => {
    const inMemoryRepo = new InMemoryNotificationsRepository();

    const cancelNotification = new CancelNotification(inMemoryRepo);

    const mockNotification = new Notification({
      category: 'social-mock',
      content: new Content('COnteúdo da notif-mock'),
      recipientId: 'recip-mock',
    });

    await inMemoryRepo.create(mockNotification);

    await cancelNotification.execute({
      notificationId: mockNotification.id,
    });

    expect(inMemoryRepo.notifications[0].canceledAt).toEqual(expect.any(Date));
  });
});
