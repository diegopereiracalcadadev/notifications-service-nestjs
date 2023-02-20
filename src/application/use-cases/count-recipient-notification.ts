import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';

interface CountRecipientNotificationsRequest {
  recipientId: string;
}

type CountRecipientNotificationsResponse = {
  count: number;
};

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationsRepo: NotificationsRepository) {}

  async execute(
    request: CountRecipientNotificationsRequest,
  ): Promise<CountRecipientNotificationsResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepo.countManyByRecipientId(
      recipientId,
    );
    return { count };
  }
}
