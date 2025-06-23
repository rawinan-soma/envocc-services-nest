import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { json } from 'express';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly http: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getFact() {
    const { data } = await firstValueFrom(
      this.http.get('https://meowfacts.herokuapp.com/'),
    );

    return data;
  }
}
