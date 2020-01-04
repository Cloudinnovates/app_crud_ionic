import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientsAddPage } from './clients-add.page';

describe('ClientsAddPage', () => {
  let component: ClientsAddPage;
  let fixture: ComponentFixture<ClientsAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
