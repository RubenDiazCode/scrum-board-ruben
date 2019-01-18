import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVIewComponent } from './login-view.component';

describe('LoginVIewComponent', () => {
  let component: LoginVIewComponent;
  let fixture: ComponentFixture<LoginVIewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginVIewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginVIewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
