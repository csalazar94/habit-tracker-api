import { Type } from 'class-transformer';
import { IsArray, IsEmail, IsNotEmpty, ValidateNested } from 'class-validator';

class Attachment {
  @IsNotEmpty()
  filename: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  contentType: string;
}

export class Email {
  @IsEmail()
  from: string;

  @IsEmail({}, { each: true })
  to: Array<string>;

  @IsEmail({}, { each: true })
  cc: Array<string>;

  @IsEmail({}, { each: true })
  bc: Array<string>;

  @IsEmail()
  replyTo: string;

  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  html: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Attachment)
  attachments: Array<Attachment>;
}
