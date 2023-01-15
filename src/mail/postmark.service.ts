import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class PostmarkService implements MailService {
  sendEmail(): string {
    return 'pmark  mail!';
  }
}
