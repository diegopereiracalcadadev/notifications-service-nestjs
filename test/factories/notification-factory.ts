import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

export function makeNotification(override: Partial<NotificationProps> = {}) {
  return new Notification({
    category: 'mock-social',
    content: new Content('mock-content'),
    recipientId: 'mock-recip-id',
    ...override,
  });
}
