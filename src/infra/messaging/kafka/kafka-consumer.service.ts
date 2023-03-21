import { OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        brokers: ['central-termite-12077-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Y2VudHJhbC10ZXJtaXRlLTEyMDc3JHFgoM8SK7yUsCJ-B88YnCREpIwWjEr24Hw',
          password: '32db4bfca4904fd3bd8cb9e223d3c672',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
