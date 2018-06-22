import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';

const authService = {
  messageSubject: {
    subscribe: () => ({}),
  },
  getMessages: () => ({
    subscribe: () => ({}),
  }),
  sendMessage: () => ({
    subscribe: () => ({}),
  }),
};

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [{ provide: AuthService, useValue: authService }],
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
