import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriesListPage } from './categories-list.page';

describe('CategoriesListPage', () => {
  let component: CategoriesListPage;
  let fixture: ComponentFixture<CategoriesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
