import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is notif.',
      category: 'social-categ',
      recipientId: 'example-recip-id',
    });

    expect(notification).toBeTruthy();
  });
});
