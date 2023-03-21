<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
 
  
## Description

[Nest](https://github.com/nestjs/nest) based notifications service using Node, Nest JS, Prisma and tested with Jest .

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development (watch mode)
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running Migrations (Prisma)

```bash
$ npx prisma migrate dev
```

## DB IDE (Prisma Studio)

```bash
$ npx prisma studio 
```

## Kafka Service Configuration (by Upstash.com)

broker: central-termite-12077-us1-kafka.upstash.io:9092 <br/>
mechanism: scram-sha-256 <br/>
username: Y2VudHJhbC10ZXJtaXRlLTEyMDc3JHFgoM8SK7yUsCJ-B88YnCREpIwWjEr24Hw <br/>
password: ****** <br/>
ssl: true

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Verify TS errors

```bash
$ npx tsc --noEmit 
```

## License

Nest is [MIT licensed](LICENSE).
