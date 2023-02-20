import { makeNotification } from '@test/factories/notification-factory';

describe('Notification', () => {
  it('show be able to create a notification', () => {
    const notification = makeNotification();

    expect(notification).toBeTruthy();
  });
});
