import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientsViewPage } from './clients-view.page';

describe('ClientsViewPage', () => {
  let component: ClientsViewPage;
  let fixture: ComponentFixture<ClientsViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
