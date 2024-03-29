import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Cancel Notification', () => {
  it('should be able to cancel a notification', async () => {
    const inMemoryRepo = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(inMemoryRepo);

    const mockNotification = makeNotification();

    await inMemoryRepo.create(mockNotification);

    await cancelNotification.execute({
      notificationId: mockNotification.id,
    });

    expect(inMemoryRepo.notifications[0].canceledAt).toEqual(expect.any(Date));
  });

  it('should not be able to cancel a non existent notification', async () => {
    const inMemoryRepo = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(inMemoryRepo);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
