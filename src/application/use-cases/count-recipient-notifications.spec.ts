import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notification';

describe('Count Recipient Notifications', () => {
  it('should be able to count a recipient notifications', async () => {
    const inMemoryRepo = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      inMemoryRepo,
    );

    const recipientIdToTest = 'mock-recip-1';

    inMemoryRepo.create(makeNotification({ recipientId: recipientIdToTest }));
    inMemoryRepo.create(makeNotification({ recipientId: recipientIdToTest }));
    inMemoryRepo.create(makeNotification({ recipientId: 'mock-recip-2' }));

    const { count } = await countRecipientNotifications.execute({
      recipientId: recipientIdToTest,
    });

    expect(count).toEqual(2);
  });
});
