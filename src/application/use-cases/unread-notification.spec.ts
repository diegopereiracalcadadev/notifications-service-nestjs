import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { UnreadNotification } from './unread-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Unread Notification', () => {
  it('should be able to unread a notification', async () => {
    const inMemoryRepo = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(inMemoryRepo);

    const mockNotification = makeNotification({ readAt: new Date() });

    await inMemoryRepo.create(mockNotification);

    await unreadNotification.execute({
      notificationId: mockNotification.id,
    });

    expect(inMemoryRepo.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non existent notification', async () => {
    const inMemoryRepo = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(inMemoryRepo);

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
