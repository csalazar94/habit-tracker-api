import { Logger } from '@nestjs/common';
import * as morgan from 'morgan';

export function successMorgan(logger: Logger) {
  return morgan('dev', {
    stream: {
      write: (message) => logger.log(message.trim()),
    },
    skip: (_req, res) => res.statusCode >= 400,
  });
}

export function errorMorgan(logger: Logger) {
  return morgan('dev', {
    stream: {
      write: (message) => logger.log(message.trim()),
    },
    skip: (_req, res) => res.statusCode < 400,
  });
}
