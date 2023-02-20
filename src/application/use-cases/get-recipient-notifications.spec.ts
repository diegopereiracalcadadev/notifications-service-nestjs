import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get Recipient Notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const inMemoryRepo = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      inMemoryRepo,
    );

    const recipientIdToTest = 'mock-recip-1';

    inMemoryRepo.create(makeNotification({ recipientId: recipientIdToTest }));
    inMemoryRepo.create(makeNotification({ recipientId: recipientIdToTest }));
    inMemoryRepo.create(makeNotification({ recipientId: 'mock-recip-2' }));

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: recipientIdToTest,
    });

    expect(notifications).toHaveLength(2);

    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: recipientIdToTest }),
        expect.objectContaining({ recipientId: recipientIdToTest }),
      ]),
    );
  });
});
