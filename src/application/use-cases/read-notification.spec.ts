import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { ReadNotification } from './read-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Read Notification', () => {
  it('should be able to read a notification', async () => {
    const inMemoryRepo = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(inMemoryRepo);

    const mockNotification = makeNotification();

    await inMemoryRepo.create(mockNotification);

    await readNotification.execute({
      notificationId: mockNotification.id,
    });

    expect(inMemoryRepo.notifications[0].readAt).toEqual(expect.any(Date));
  });

  it('should not be able to read a non existent notification', async () => {
    const inMemoryRepo = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(inMemoryRepo);

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
