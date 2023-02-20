import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Count Recipient Notifications', () => {
  it('should be able to count a recipient notifications', async () => {
    const inMemoryRepo = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      inMemoryRepo,
    );

    const recipientIdToTest = 'mock-recip-1';

    inMemoryRepo.create(
      new Notification({
        category: 'mock-social',
        content: new Content('mock-content'),
        recipientId: recipientIdToTest,
      }),
    );
    inMemoryRepo.create(
      new Notification({
        category: 'mock-social',
        content: new Content('mock-content'),
        recipientId: recipientIdToTest,
      }),
    );
    inMemoryRepo.create(
      new Notification({
        category: 'mock-social',
        content: new Content('mock-content'),
        recipientId: 'mock-recip-2',
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: recipientIdToTest,
    });

    expect(count).toEqual(2);
  });
});
