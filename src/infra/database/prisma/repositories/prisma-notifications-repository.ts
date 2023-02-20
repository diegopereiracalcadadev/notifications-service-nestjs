import { Injectable } from '@nestjs/common';
import { Notification } from 'src/application/entities/notification';
import { NotificationsRepository } from '../../../../application/repositories/notifications-repository';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notification.create({
      data: raw,
    });
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (item) => item.id === notificationId,
    );
  }

  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async count(recipientId: number): Promise<number> {
    return this.prismaService.notification.count(
      { where: {
        item.recipientId === recipientId
      }}
    );
  }
}
