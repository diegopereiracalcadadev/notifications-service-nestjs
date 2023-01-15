import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class SmtpMailService implements MailService {
  sendEmail(): string {
    return 'SMTP mail!';
  }
}
