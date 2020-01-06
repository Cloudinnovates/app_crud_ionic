import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginViewPage } from './login-view.page';

describe('LoginViewPage', () => {
  let component: LoginViewPage;
  let fixture: ComponentFixture<LoginViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
