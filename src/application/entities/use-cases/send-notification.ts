import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../../repositories/notifications-repository';
import { Content } from '../content';
import { Notification } from '../notification';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepo: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRepo.create(notification);

    return {
      notification,
    };
  }
}