import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from './../shared/shared.module';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
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

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [
        SharedModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [{ provide: AuthService, useValue: authService }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
