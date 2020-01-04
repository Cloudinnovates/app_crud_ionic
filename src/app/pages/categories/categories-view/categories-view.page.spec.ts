import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriesViewPage } from './categories-view.page';

describe('CategoriesViewPage', () => {
  let component: CategoriesViewPage;
  let fixture: ComponentFixture<CategoriesViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
