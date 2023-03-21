import { randomUUID } from 'crypto';
import { Kafka } from 'kafkajs';

async function bootstrap() {
  const kafka = new Kafka({
    clientId: 'kafka-producer',
    brokers: ['central-termite-12077-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username:
        'Y2VudHJhbC10ZXJtaXRlLTEyMDc3JHFgoM8SK7yUsCJ-B88YnCREpIwWjEr24Hw',
      password: '32db4bfca4904fd3bd8cb9e223d3c672',
    },
    ssl: true,
  });

  const producer = kafka.producer();

  await producer.connect();

  await producer.send({
    topic: 'notifications.send-notification',
    messages: [
      {
        value: JSON.stringify({
          content: 'New notification from producer 2! ',
          category: 'social',
          recipientId: randomUUID(),
        }),
      },
    ],
  });

  await producer.disconnect();
}

await bootstrap();
