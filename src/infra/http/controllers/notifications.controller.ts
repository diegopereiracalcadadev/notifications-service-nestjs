import { PrismaNotificationMapper } from '@infra/database/prisma/mappers/prisma-notification-mapper';
import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/entities/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../viewModels/notification-view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification: NotificationViewModel.toHTTP(notification) };
  }
}
