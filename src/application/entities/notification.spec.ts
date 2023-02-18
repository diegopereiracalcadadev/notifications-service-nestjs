import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('show be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipi',
    });

    expect(notification).toBeTruthy();
  });
});
