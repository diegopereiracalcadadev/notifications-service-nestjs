import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationsRepo: NotificationsRepository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepo.findById(notificationId);

    if (!notification) {
      throw new HttpException('Notification not found', HttpStatus.NOT_FOUND);
    }

    if (notification.canceledAt) {
      throw new HttpException(
        'Operation already executed',
        HttpStatus.PRECONDITION_FAILED,
      );
    }

    notification.cancel();

    await this.notificationsRepo.save(notification);
  }
}
